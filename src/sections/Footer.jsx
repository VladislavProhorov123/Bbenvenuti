import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-16">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="">
          <div className="text-2xl font-bold">PERFUME</div>
          <p className="mt-4 text-[var(--text-secondary)]">
            Elevate your senses with our premium fragrances. Discover, indulge,
            and embrace your signature scent.
          </p>
        </div>

        <div className="">
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--brand-primary)] transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[var(--brand-primary)] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[var(--brand-primary)] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-[var(--brand-primary)] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-[var(--text-secondary)]">info@perfume.com</p>
          <p className="text-[var(--text-secondary)] mt-2">+1 234 567 890</p>
          <p className="text-[var(--text-secondary)] mt-2">
            123 Perfume Street, NYC
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-[var(--text-secondary)] text-sm">
        &copy; {new Date().getFullYear()} PERFUME. All rights reserved.
      </div>
    </footer>
  );
}
