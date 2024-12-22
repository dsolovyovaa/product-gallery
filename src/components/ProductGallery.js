import React from "react";
import GoodsCard from "./GoodsCard";

const ProductGallery = () => {
  const products = [
    {
      name: "Cup",
      price: 150,
      image: "/cup.jpg",
    },
    {
      name: "T-shirt",
      price: 250,
      image: "/styssy.jpg",
    },
    {
      name: "Lipgloss",
      price: 12000,
      image: "/lip.jpg",
    },
    {
      name: "Book",
      price: 300,
      image: "/book.jpg",
    },
    {
      name: "Earing",
      price: 1500,
      image: "/earing.jpg",
    },
    {
      name: "Wallet",
      price: 500,
      image: "/wallet.jpg",
    },
  ];

  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <GoodsCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
