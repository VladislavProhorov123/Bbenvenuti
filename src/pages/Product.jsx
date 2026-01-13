import React, { useEffect, useState } from "react";
import { comments, products } from "../data/products";
import { useParams } from "react-router-dom";
import ContactForm from "../sections/ContactForm";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found);
    // Скролл наверх при переходе на другой товар
    window.scrollTo(0, 0);
  }, [id]);

  if (!product)
    return (
      <section className="min-h-[70svh] flex items-center justify-center bg-[var(--bg-secondary)] px-6">
        <div className="max-w-xl text-center">
          <p className="tracking-widest text-sm text-[var(--text-muted)] mb-4">
            FRAGRANCE NOT FOUND
          </p>

          <h1 className="text-3xl sm:text-4xl font-serif mb-6">
            This scent has faded away
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            The fragrance you are looking for is no longer available or may
            never have existed. Like rare perfumes, some things are meant to be
            fleeting. But our collection is full of extraordinary scents waiting
            to be discovered.
          </p>

          <button
            onClick={() => window.history.back()}
            className="mt-8 px-8 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition"
          >
            Go back
          </button>
        </div>
      </section>
    );

  // Upsell / похожие товары
  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="py-24">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-0">
        {/* IMAGE */}
        <div className="bg-[var(--bg-soft)] rounded-2xl flex items-center justify-center p-4 md:p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm md:max-w-md lg:max-w-none object-contain"
          />
        </div>

        {/* INFO */}
        <div className="text-center lg:text-left">
          <p className="uppercase text-sm tracking-wide text-[var(--text-muted)]">
            {product.brand}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mt-2">
            {product.title}
          </h1>

          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center max-md:justify-center gap-2">
            <span className="font-semibold">{product.rating}</span>
            <span className="text-[var(--text-muted)]">/ 5.0</span>
          </div>

          {/* Price */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 justify-center lg:justify-start">
            <span className="text-3xl font-semibold">${product.price}</span>
            <span className="text-[var(--text-muted)]">{product.ml} ml</span>
          </div>

          {/* Notes */}
          <div className="mt-6 md:mt-8">
            <h3 className="font-semibold mb-3">Fragrance Notes</h3>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-[var(--bg-soft)] rounded-full text-xs sm:text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 md:mt-10 w-full sm:w-auto px-8 md:px-10 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="container max-w-6xl mx-auto mt-16 md:mt-24 mb-12 px-4 md:px-0">
        <h2 className="text-2xl font-serif mb-12 text-center">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-[var(--bg-soft)] border border-[var(--border-color)] rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                    {comment.rating} / 5
                  </p>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="container max-w-6xl mx-auto mt-16 md:mt-24 px-4 md:px-0 mb-8">
          <h2 className="text-2xl font-serif mb-12 text-center">
            You may also like
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <ContactForm />
    </section>
  );
}
