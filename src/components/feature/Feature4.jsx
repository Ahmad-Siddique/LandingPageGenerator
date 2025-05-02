export default function Features4({
  title = "Our Awesome Features",
  titleColor = "#000000",
  backgroundColor = "#ffffff",
  features = [],
}) {
  const safeFeatures =
    Array.isArray(features) && features.length
      ? features
      : [
          {
            icon: "🚀",
            heading: "Fast Launch",
            text: "Get started in minutes with our simple setup.",
            cardColor: "#f3f4f6",
          },
          {
            icon: "🔒",
            heading: "Secure",
            text: "Your data is protected with industry-leading security.",
            cardColor: "#f3f4f6",
          },
          {
            icon: "⚡",
            heading: "Lightning Fast",
            text: "Enjoy blazing fast performance everywhere.",
            cardColor: "#f3f4f6",
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {safeFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl transition hover:bg-gray-50"
              style={{ backgroundColor: feature.cardColor || "transparent" }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.heading}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
