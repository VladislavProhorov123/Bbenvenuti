import React from "react";
import { comments, products } from "../data/products";
import { useParams } from "react-router-dom";
import ContactForm from "../sections/ContactForm";

export default function Product() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Not found</p>;
  return (
    <section className="py-24">
      <div className="container max-w-6xl mx-auto grid grid-cols-2 gap-16">
        {/* IMAGE */}
        <div className="bg-[var(--bg-soft)] rounded-2xl  flex items-center justify-center ">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* INFO */}
        <div>
          <p className="uppercase text-sm tracking-wide text-[var(--text-muted)]">
            {product.brand}
          </p>

          <h1 className="text-4xl font-serif mt-2">{product.title}</h1>

          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="font-semibold">{product.rating}</span>
            <span className="text-[var(--text-muted)]">/ 5.0</span>
          </div>

          {/* Price */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-semibold">${product.price}</span>
            <span className="text-[var(--text-muted)]">{product.ml} ml</span>
          </div>

          {/* Notes */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Fragrance Notes</h3>
            <div className="flex flex-wrap gap-3">
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="px-4 py-2 bg-[var(--bg-soft)] rounded-full text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 px-10 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="container max-w-6xl mx-auto mt-24 mb-12">
        <h2 className="text-2xl font-serif mb-12 text-center">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-[var(--bg-soft)] border border-[var(--border-color)] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {comment.rating} / 5
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
