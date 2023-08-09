import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  // Simular datos del producto
  const product = {
    id: parseInt(id),
    name: "Product A",
    description: "This is the description of Product A.",
  };

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
