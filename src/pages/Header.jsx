import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[var(--brand-primary)] border-b-2 border-[var(--brand-primary)] pb-1 font-semibold transition"
      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition";

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] shadow-md ">
      <div className="container flex justify-between items-center h-24">
        <div className="text-2xl font-playfair text-[var(--brand-primary)] tracking-wider">
          PERFUME
        </div>

        <nav className="hidden md:flex gap-10 text-lg">
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "opacity-0"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "-rotate-45 -translate-y-2"
            }`}
          />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-6 p-6 bg-[var(--bg-secondary)]">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/products"
            className={linkClass}
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contacts"
            className={linkClass}
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
