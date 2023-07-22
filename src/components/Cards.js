import React from "react";
import star from "./images/star.png";

const Cards = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
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
