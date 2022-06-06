import { useState, useEffect } from "react";
import axios from "axios";

export const useMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/matches"
      )
      .then(response => {
        setMatches(response.data.matches);
      });
  }, []);

  return [matches]
};