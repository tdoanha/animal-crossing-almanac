import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";

const API_URL = "https://api.nookipedia.com/nh/fish";

function Cards() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const fetchFishes = () => {
      fetch(API_URL, {
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

  const fishArray = fishes.map((fish) => {
    return (
      <Card
        name={fish.name}
        photo={fish.image_url}
        nookSell={fish.sell_nook}
        cjSell={fish.sell_cj}
        location={fish.location}
        rarity={fish.rarity}
      />
    );
  });

  return (
    <div className="cards-container">
      {fishArray}
      <p></p>
    </div>
  );
}

export default Cards;
