export default function Testimonials3({
  title = "What Our Users Say",
  titleColor = "#000000",
  backgroundColor = "#f8fafc",
  testimonials = [],
}) {
  const safeTestimonials =
    Array.isArray(testimonials) && testimonials.length
      ? testimonials
      : [
          {
            text: "This product changed my workflow forever. Highly recommended!",
            name: "John Doe",
            role: "Startup Founder",
            cardColor: "#ffffff",
            quoteColor: "#111827",
            borderColor: "#e5e7eb",
          },
        ];

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-3xl mx-auto px-4">
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
              className="p-8 rounded-xl shadow-lg border"
              style={{
                backgroundColor: t.cardColor || "#ffffff",
                borderColor: t.borderColor || "#e5e7eb",
              }}
            >
              <blockquote
                className="text-2xl font-semibold mb-4 leading-snug"
                style={{ color: t.quoteColor || "#111827" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div
                className="font-medium"
                style={{ color: t.quoteColor || "#111827" }}
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
