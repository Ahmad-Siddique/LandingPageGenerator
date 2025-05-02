export default function Testimonials1({
  title = "What Our Users Say",
  titleColor = "#000000",
  backgroundColor = "#ffffff",
  testimonials = [],
}) {
  // Fallback for empty testimonials
  const safeTestimonials =
    Array.isArray(testimonials) && testimonials.length
      ? testimonials
      : [
          {
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "This product changed my workflow forever. Highly recommended!",
            name: "John Doe",
            role: "Startup Founder",
            cardColor: "#ffffff",
            borderColor: "#2563eb",
            quoteColor: "#4b5563",
          },
          {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Amazing design and super easy to use. Love it!",
            name: "Jane Smith",
            role: "Product Designer",
            cardColor: "#ffffff",
            borderColor: "#2563eb",
            quoteColor: "#4b5563",
          },
        ];

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {safeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
              style={{
                backgroundColor: t.cardColor || "#ffffff",
                borderTop: `4px solid ${t.borderColor || "transparent"}`,
              }}
            >
              {t.avatar && (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
                />
              )}
              <p
                className="italic mb-4 text-lg"
                style={{ color: t.quoteColor || "#4b5563" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="font-semibold" style={{ color: t.borderColor }}>
                {t.name}
              </div>
              <div className="text-sm" style={{ color: t.quoteColor }}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Testimonials1.defaultProps = {
  title: "What Our Users Say",
  testimonials: [],
  backgroundColor: "#f8fafc",
  titleColor: "#111827",
};
