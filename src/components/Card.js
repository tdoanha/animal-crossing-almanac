import React from "react";
import "./Card.css";

function Card({ name, photo, nookSell, cjSell, location, rarity }) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img className="card-image" src={photo} alt={name} />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{`Sell Price (Nook): ${nookSell}`}</p>
        <p>{`Sell Price (CJ): ${cjSell}`}</p>
        <p>{`Hot Item Sell Price: ${nookSell * 2}`}</p>
        <p>{`Location: ${location}`}</p>
        <p>{`Rarity: ${rarity}`}</p>
      </div>
    </div>
  );
}

export default Card;
