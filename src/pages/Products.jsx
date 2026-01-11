import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("default");

  const brands = ["all", ...new Set(products.map((p) => p.brand))];

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => brand === "all" || p.brand === brand)
    .sort((a, b) => (sort === "price-asc" ? a.price - b.price : 0));

  return (
    <section className="py-4">
      <div className="container">
        

        {/* Filters */}
        <div className="flex flex-wrap gap-6 items-center mb-12 bg-[var(--bg-soft)] p-6 rounded-xl">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fragrance..."
            className="px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]"
          />

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b === "all" ? "All brands" : b}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low → High</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
