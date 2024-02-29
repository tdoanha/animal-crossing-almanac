import React, { useEffect, useState } from "react";
import Cards from "../Cards";

const API_FISH_URL = "https://api.nookipedia.com/nh/fish";

function Fish() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const fetchFishes = () => {
      fetch(API_FISH_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_NOOK_API_KEY,
          "Accept-Version": "1.6.0",
        },
      })
        .then((response) => response.json())
        .then((data) => setFishes(data))
        .catch((err) => console.error(`There was an error: ${err}`));
    };

    fetchFishes();
  }, []);
  return (
    <>
      <h1>FISH</h1>
      <Cards data={fishes} />
    </>
  );
}

export default Fish;
