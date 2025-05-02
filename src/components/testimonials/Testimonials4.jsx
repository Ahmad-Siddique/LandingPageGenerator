export default function Testimonials4({
  title = "What Our Users Say",
  titleColor = "#000000",
  backgroundColor = "#ffffff",
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
            cardColor: "#f3f4f6",
            borderColor: "#2563eb",
            quoteColor: "#4b5563",
          },
        ];

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {safeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow text-center border-t-4"
              style={{
                backgroundColor: t.cardColor || "#f3f4f6",
                borderTopColor: t.borderColor || "#2563eb",
              }}
            >
              {t.avatar && (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 mx-auto rounded-full mb-3 object-cover"
                />
              )}
              <p
                className="italic mb-3 text-base"
                style={{ color: t.quoteColor || "#4b5563" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="font-semibold">{t.name}</div>
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
