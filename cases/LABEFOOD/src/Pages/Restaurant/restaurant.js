import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../Constants/url";
import {
  CardRestaurant,
  Category,
  ContainerRestaurant,
  Hr,
  SectionProductByCategory,
} from "./styled";
import CardRestaurantDetail from "../../Components/CardRestaurantDetail.js/CardRestaurantDetail";
import Header from "../../Components/Header/Header";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Loading from "../../Components/Loading/Loading";
import useProtectedPage from "../../Hooks/useProtectedPage";

const Restaurant = () => {
  useProtectedPage()

  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  const getRestaurant = async () => {
    await axios
      .get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const showProducts = (restaurant) => {
    if (restaurant === undefined) {
      return <Loading />;
    } else {
      restaurant.products.map((product) => {
        return <CardProduct key={product.id} product={product} />;
      });
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    if (restaurant.products) {
      const newCategories = [];
      for (const product of restaurant.products) {
        newCategories.push(product.category);
      }
      const takeOutRepeatCategory = [...new Set(newCategories)];
      setCategories(takeOutRepeatCategory);
    }
  }, [restaurant]);
  
  return (
    <ContainerRestaurant>
      <Header title={"Restaurante"} back={true}/>
      {restaurant ? (
        <CardRestaurant>
          <CardRestaurantDetail restaurant={restaurant} />
          {restaurant.products &&
            categories.map((category) => {
              return (
                <SectionProductByCategory>
                  <Category>{category}</Category>
                  <Hr/>
                  {
                  restaurant.products
                  .filter((product)=>{
                    return product.category === category
                  })
                  .map((product) => {
                    return <CardProduct key={product.id} product={product} />;
                  })
                  }
                </SectionProductByCategory>
              );
            })}
        </CardRestaurant>
      ) : (
        <Loading />
      )}
    </ContainerRestaurant>
  );
};

export default Restaurant;
