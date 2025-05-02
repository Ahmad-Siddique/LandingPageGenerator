export default function Features3({
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
        <div className="space-y-6">
          {safeFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow hover:shadow-lg transition flex items-start gap-6"
              style={{ backgroundColor: feature.cardColor || "#f3f4f6" }}
            >
              <div className="text-4xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.heading}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
