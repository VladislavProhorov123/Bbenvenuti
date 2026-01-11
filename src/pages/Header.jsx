import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[var(--brand-primary)] border-b-2 border-[var(--brand-primary)] pb-1 font-semibold transition"
      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition";

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] shadow-md ">
      <div className="container flex justify-between items-center h-24">
        <div className="text-2xl font-playfair text-[var(--brand-primary)] tracking-wider">PERFUME</div>

        <nav className="flex gap-10 text-lg">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/contacts" className={linkClass}>
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
