import React from "react";
import { products } from "../data/products";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Not found</p>;
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] p-6 rounded-xl">
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-[var(--text-secondary)]">{product.brand}</p>
      <p className="text-[var(--brand-primary)] font-bold">${product.price}</p>
      
    </div>
  );
}
