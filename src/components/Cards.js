import Card from "./Card";
import "./Cards.css";

function Cards({ data }) {
  const dataArray = data.map((ele) => {
    return (
      <Card
        name={ele.name}
        photo={ele.image_url}
        nookSell={ele.sell_nook}
        cjSell={ele.sell_cj}
        location={ele.location}
        rarity={ele.rarity}
      />
    );
  });

  return (
    <div className="cards-container">
      {dataArray}
      <p></p>
    </div>
  );
}

export default Cards;
