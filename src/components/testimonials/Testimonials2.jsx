export default function Testimonials2({
  title = "What Our Users Say",
  titleColor = "#000000",
  backgroundColor = "#f9fafb",
  testimonials = [],
}) {
  const safeTestimonials =
    Array.isArray(testimonials) && testimonials.length
      ? testimonials
      : [
          {
            avatar: "",
            text: "This product changed my workflow forever. Highly recommended!",
            name: "John Doe",
            role: "Startup Founder",
            cardColor: "#ffffff",
            borderColor: "#e5e7eb",
            quoteColor: "#374151",
          },
        ];

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <div className="space-y-8">
          {safeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl shadow-lg border transition-all"
              style={{
                backgroundColor: t.cardColor || "#ffffff",
                borderColor: t.borderColor || "#e5e7eb",
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
                className="italic mb-3 text-lg leading-relaxed"
                style={{ color: t.quoteColor || "#374151" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                className="font-semibold"
                style={{ color: t.quoteColor || "#374151" }}
              >
                {t.name}
              </div>
              <div
                className="text-sm"
                style={{
                  color: t.quoteColor ? `${t.quoteColor}80` : "#6b7280",
                }}
              >
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
