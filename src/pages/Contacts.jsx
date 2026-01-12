import React from "react";
import parfume4 from "../assets/parfume4.jpg";
import ContactForm from "../sections/ContactForm";

export default function Contacts() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)]">
      <div className="container max-w-5xl mx-auto">
        {/* Заголовок + вводный текст */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif mb-4">Get in Touch with Us</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to share your experience, our team is always ready to
            assist. Fill out the form below and we’ll get back to you as soon as
            possible.
          </p>
        </div>
              <ContactForm />

      </div>
    </section>
  );
}
