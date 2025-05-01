// src/components/sections/CTA/CTA1.jsx
export default function CTA1({ heading, subheading, buttonText, buttonLink }) {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="mb-8 text-lg">{subheading}</p>
        <a
          href={buttonLink}
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}

// Example default props:
CTA1.defaultProps = {
  heading: "Ready to get started?",
  subheading: "Sign up today and launch your project in minutes.",
  buttonText: "Get Started",
  buttonLink: "#",
};
