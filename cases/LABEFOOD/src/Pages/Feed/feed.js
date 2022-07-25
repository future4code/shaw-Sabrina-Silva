import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import BASE_URL from "../../Constants/url";
import useProtectedPage from "../../Hooks/useProtectedPage";
import {
  ContainerFeed,
  CardsRestaurant,
  BoxInputSearch,
  InputSearch,
  Menu,
  MenuItem,
} from "./styled";
import Loading from "../../Components/Loading/Loading";
import { InputAdornment } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Search } from "@mui/icons-material";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import Order from "../../Components/Order/Order";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState("");

  const { states, setters } = useGlobal();
  const { order } = states;
  const { setOrder } = setters;

  useProtectedPage();

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        filterRestaurantCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getActiveOrder = async () => {
    await axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrder(res.data.order);
        const expiresAt = res.data.order.expiresAt
        setTimeout(()=> {
        getActiveOrder()
      }, expiresAt - new Date().getTime())
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
    getActiveOrder();
  }, []);

  const filterRestaurantName = restaurants
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toLocaleLowerCase())
        : true
    )
    .map((restaurant) => {
      return <CardRestaurant restaurant={restaurant} />;
    });

  const filterRestaurantCategory = (restaurants) => {
    const categorys = [];

    restaurants &&
      restaurants.map((res) => {
        categorys.push(res.category);
      });

    const takeOutRepeatCategory = [...new Set(categorys)];

    const changeObjectArray = [];

    takeOutRepeatCategory.map((category) => {

      const insertObject = { category, select: false };

      changeObjectArray.push(insertObject);

      return insertObject;
    });
    setCategoryRestaurant(changeObjectArray);
  };

  const changeColorAndCategory = (category) => {
    setValueCategory(category);

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          select: true,
        };
      } else {
        return {
          ...cat,
          select: false,
        };
      }
    });
    setCategoryRestaurant(result);
  };

  return (
    <ContainerFeed>
      <Header title={"IFuture"} />
      <BoxInputSearch>
        <InputSearch
          placeholder="Restaurante"
          variant="outlined"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </BoxInputSearch>
      {restaurants ? (
        <div>
          <Menu> 
             <MenuItem select={false} onClick={() => setValueCategory("")}>
              Todos
            </MenuItem>
            {categoryRestaurant.map((category) => {
              return (
                <MenuItem
                  select={category.select}
                  onClick={() => changeColorAndCategory(category.category)}
                >
                 {category.category}
                </MenuItem>
              );
            })}
          </Menu>
          <CardsRestaurant>{filterRestaurantName}</CardsRestaurant>
        </div>
      ) : (
        <Loading />
      )}
      {!order ? <></> : <Order activeOrder={order}/> }
      <Footer page="home" />
    </ContainerFeed>
  );
};

export default Feed;
