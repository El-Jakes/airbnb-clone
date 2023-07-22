import React from "react";
import star from "./images/star.png";

const Cards = (props) => {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img
        className="card-img"
        src={props.coverImg}
        alt="Katie Zaferes wearing a swim suit with a swim cap and goggles"
      />
      <div className="card-stats">
        <img src={star} alt="a red star" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray-tint">({props.reviewCount}) • </span>
        <span className="gray-tint">{props.location}</span>
      </div>
      <p className="cards-title">{props.title}</p>
      <p>
        <span className="card-price">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Cards;
