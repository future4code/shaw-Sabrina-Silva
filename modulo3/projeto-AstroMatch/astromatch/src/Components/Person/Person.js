import react, { useState, useEffect } from "react";
import like from "../../assets/verificar.png";
import noLike from "../../assets/remover.png";
import axios from "axios";
import {
  ImgPerfil,
  ImgLike,
  ImgNoLike,
  Button,
  NomeIdade,
  Container,
  BlocoProfile,
  BlocoDescrição,
  BorderImgNoLike,
} from "./styled";

const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/";

export const Person = () => {
  const [profile, setProfileList] = useState({});

  const getProfile = () => {
    axios
      .get(`${url}person`)
      .then((res) => {
        setProfileList(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response, "Não foi");
      });
  };

  const postChoosePerson = (id, boolean) => {
    const body = {
      id: profile.id,
      boolean: boolean,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/choose-person`,
        body
      )
      .then((res) => {
        console.log(res);
        getProfile();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Container>
        {profile ? (
          <BlocoProfile>
            <ImgPerfil src={profile.photo} />
            <NomeIdade>
              {profile.name}, {profile.age} anos
            </NomeIdade>
            <BlocoDescrição>
            <p>{profile.bio}</p>
            </BlocoDescrição>
          </BlocoProfile>
        ) : (
          <div>
            <p>Sem mais perfis!</p>
          </div>
        )}
        <Button>
        <BorderImgNoLike>
           <ImgNoLike
            onClick={() => postChoosePerson(true)}
            src={noLike}
            alt="Deslike"
          />
          </BorderImgNoLike>
           <ImgLike
            onClick={() => postChoosePerson(false)}
            src={like}
            alt="Like"
          />
        </Button>
    </Container>
  );
};
