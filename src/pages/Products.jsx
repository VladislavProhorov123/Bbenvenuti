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
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-stretch md:items-center mb-8 md:mb-12 bg-[var(--bg-soft)] p-4 md:p-6 rounded-xl">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fragrance..."
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm md:text-base"
          />

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm md:text-base"
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
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm md:text-base"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low → High</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
