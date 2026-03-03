import React, { FC } from "react";

const safeArray = (value: any) => (Array.isArray(value) ? value : []);

interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}
interface TestimonialsProps {
  title?: string;
  description?: string;
  data?: TestimonialItem[];
  className?: string;
}
const Testimonials: React.FC<TestimonialsProps> = ({ title, description, data, className }) => {
  return (
    <section className={`py-16 md:py-24 ${className || ''}`} style={{ backgroundColor: "var(--c-surface)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {title && <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "var(--c-fg)" }}>{title}</h2>}
          {description && <p className="mt-4 text-xl" style={{ color: "var(--c-muted-fg)" }}>{description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeArray(data).map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[var(--c-bg)] to-[var(--c-surface)] p-8 rounded-xl shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius)" }}
            >
              <p className="text-lg italic mb-6 leading-relaxed" style={{ color: "var(--c-fg)" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "var(--c-fg)" }}>{testimonial.author}</p>
                  <p className="text-sm" style={{ color: "var(--c-muted-fg)" }}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;