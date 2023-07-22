import React from "react";
import star from "./images/star.png";

const Cards = (props) => {
  let badgeText
  if (props.datum.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.datum.location === 'Online') {
    badgeText = 'ONLINE'
  }
/* Note that the datum object is added to the props in order for them to render properly.
  check App.js for more clarity on why i am doing this
*/
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-img"
        src={props.datum.coverImg}
        alt="Katie Zaferes wearing a swim suit with a swim cap and goggles"
      />
      <div className="card-stats">
        <img src={star} alt="a red star" className="card-star" />
        <span>{props.datum.stats.rating}</span>
        <span className="gray-tint">({props.datum.stats.reviewCount}) • </span>
        <span className="gray-tint">{props.datum.location}</span>
      </div>
      <p className="cards-title">{props.datum.title}</p>
      <p>
        <span className="card-price">From ${props.datum.price}</span> / person
      </p>
    </div>
  );
};

export default Cards;
