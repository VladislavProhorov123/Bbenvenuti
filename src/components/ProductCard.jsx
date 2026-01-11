import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group w-[300px] h-[340px] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
        {/* Изображение */}
        <div className="h-60 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col flex-1 p-4 justify-between">
          <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)] truncate">
            {product.title}
          </h3>
          <p className="mt-1 text-[var(--text-secondary)] font-medium">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
