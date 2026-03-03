import React, { FC } from "react";
import { Link } from "react-router-dom";
interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}
const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonLink, className }) => {
  return (
    <section className={`py-16 md:py-24 text-center ${className || ''}`} style={{ backgroundColor: "var(--c-bg)" }}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {title && <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--c-fg)" }}>{title}</h2>}
        {description && <p className="mt-6 text-xl leading-8" style={{ color: "var(--c-muted-fg)" }}>{description}</p>}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {buttonLink && buttonText && (
            <Link
              to={buttonLink}
              className="rounded-md px-6 py-3 text-lg font-semibold shadow-md transition-colors duration-300 transform hover:scale-105"
              style={{ backgroundColor: "var(--c-primary)", color: "var(--c-primary-fg)", borderRadius: "var(--radius)" }}
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default CallToAction;