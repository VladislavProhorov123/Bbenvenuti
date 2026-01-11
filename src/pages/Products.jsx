import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
