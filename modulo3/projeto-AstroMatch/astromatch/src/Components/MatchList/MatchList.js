import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TitleH3 } from "./styled";
import { useMatches } from "../../hooks/useMatches";

const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/";

export const MatchList = () => {
  const [matchList, setMatchList] = useState([{}]);

  console.log(matchList);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/matches"
      )
      .then((res) => {
        
      // setMatchList(res.data.matchList);

      })
      .catch((err) => {
        alert("Erro!", err.response);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const matches = useMatches();

  const putClear = () => {
    axios
      .put(`${url}clear`)
      .then(() => {
        setMatchList([]);
      })
      .catch((err) => {
        alert("Erro ao excluir matches!", err.response);
      });
  };

//   const List = matchList.response;
//   let renderList;
//   renderList = List
//     ? matchList[0].response.map((match) => {
//         console.log(match);
//         return (
//           <div key={match.id}>
//             <img src={match.photo} alt={match.name} />
//             <p>{match.name}</p>
//           </div>
//         );
//       })
//     : (renderList = <p>Erro! Sem matches</p>);

//   {
    /* <ListContainer>
{matchList.map((profile) => {
  return <MatchListItem profile={profile} />;
})}
</ListContainer> */
 // }
  return (
    <Container>
      <>
        <TitleH3>Seus Matches</TitleH3>
      </>
      {/* {matches.map(profile=> {
        return (
            <div key={profile.id}>
                {profile.name}
            </div>
        )
    })} */}
      {matchList.map((profile) => {
        return <div key={profile.id}>
        {profile.name}
    </div>
      })}
      <button onClick={() => putClear()}>Excluir matches</button>
    </Container>
  );
};
