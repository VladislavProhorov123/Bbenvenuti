import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      phone,
      message,
      date: new Date().toLocaleString(),
    };

    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/b6d0c161-701f-4764-ab93-0bf9414b6086",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setName("");
      setPhone("");
      setMessage("");
      alert("Your message has been sent");
    } catch (err) {
      alert("Error sending form. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Левый блок: текст */}
        <div className="lg:w-1/2">
          <SectionTitle
            title="Stay Connected with Us"
            subtitle="Join our fragrance community and get exclusive access to limited edition scents, special offers, and insider tips from our master perfumers. Sign up now to elevate your olfactory experience and never miss a new release or promotion."
          />
          <p className="mt-6 text-[var(--text-secondary)]">
            By subscribing to our newsletter, you’ll receive personalized
            recommendations, early access to new collections, and curated
            content about the art of perfumery. Your email is safe with us – we
            never share your information with third parties.
          </p>
        </div>

        {/* Правый блок: форма */}
        <div className="lg:w-1/2 sm:w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-[var(--bg-soft)] p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="border border-[var(--border-color)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 890"
                required
                className="border border-[var(--border-color)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium">
                Comment
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="border border-[var(--border-color)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition w-full cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
