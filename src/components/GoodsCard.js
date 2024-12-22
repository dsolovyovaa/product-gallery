import React from "react";

const GoodsCard = ({ name, price, image }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h3>{name}</h3>
      <p>{price} UAH</p>
    </div>
  );
};

export default GoodsCard;
