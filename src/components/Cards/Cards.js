import React from "react";
import "./cards.css";
import SingleCard from "./SingleCard";

function Cards({ data }) {
  return (
    <div className="cards-container">
      {data && data.map((item) => <SingleCard itemData={item} />)}
    </div>
  );
}

export default Cards;
