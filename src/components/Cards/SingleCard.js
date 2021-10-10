import React from "react";

function SingleCard({ itemData }) {
  const getYear = (date) => {
    return date && date.split("-")[0];
  };
  return (
    <div className="single-card-container">
      <img src={`https://image.tmdb.org/t/p/original${itemData.poster_path}`} />
      <p className="card-name">{itemData.title}</p>
      <p className="year">
        {getYear(itemData.first_air_date || itemData.release_date)}
      </p>
    </div>
  );
}

export default SingleCard;
