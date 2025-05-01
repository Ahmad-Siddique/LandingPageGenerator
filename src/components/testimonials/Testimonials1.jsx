// src/components/sections/Testimonials/Testimonials1.jsx
export default function Testimonials1({ title, testimonials }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="italic text-gray-700 mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Example default props:
Testimonials1.defaultProps = {
  title: "What Our Users Say",
  testimonials: [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "This product changed my workflow forever. Highly recommended!",
      name: "John Doe",
      role: "Startup Founder",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Amazing design and super easy to use. Love it!",
      name: "Jane Smith",
      role: "Product Designer",
    },
  ],
};
