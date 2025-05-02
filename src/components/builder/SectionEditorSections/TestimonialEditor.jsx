import { useContext } from "react";
import { BuilderContext } from "../../../context/BuilderContext";

export default function TestimonialsEditor({ section }) {
  const { setSections, selectedSectionId } = useContext(BuilderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSections((prevSections) =>
      prevSections.map((s) =>
        s.id === selectedSectionId
          ? { ...s, props: { ...s.props, [name]: value } }
          : s
      )
    );
  };

  // For testimonials array fields
  const handleTestimonialChange = (idx, field, value) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const testimonials = s.props.testimonials.map((t, i) =>
          i === idx ? { ...t, [field]: value } : t
        );
        return { ...s, props: { ...s.props, testimonials } };
      })
    );
  };

  // For testimonial card color
  const handleTestimonialColorChange = (idx, field, value) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const testimonials = s.props.testimonials.map((t, i) =>
          i === idx ? { ...t, [field]: value } : t
        );
        return { ...s, props: { ...s.props, testimonials } };
      })
    );
  };

  // Add a new testimonial
  const handleAddTestimonial = () => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const testimonials = [
          ...s.props.testimonials,
          {
            avatar: "",
            text: "New testimonial text.",
            name: "New User",
            role: "Role",
            cardColor: "#ffffff",
            quoteColor: "#111827",
            borderColor: "#2563eb",
          },
        ];
        return { ...s, props: { ...s.props, testimonials } };
      })
    );
  };

  // Remove a testimonial
  const handleRemoveTestimonial = (idx) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const testimonials = s.props.testimonials.filter((_, i) => i !== idx);
        return { ...s, props: { ...s.props, testimonials } };
      })
    );
  };

  const ColorInput = ({
    label,
    name,
    value,
    placeholder = "#000000",
    onChange,
  }) => (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          name={name}
          value={value}
          onChange={onChange || handleChange}
          className="w-7 h-7 rounded-full border-2 border-gray-200 shadow-sm cursor-pointer transition hover:border-gray-400"
          style={{ background: "transparent" }}
        />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange || handleChange}
          className="flex-1 p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );

  return (
    <form className="space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Title
        </label>
        <input
          name="title"
          value={section.props.title || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          autoComplete="off"
        />
      </div>
      {/* Title Color */}
      <ColorInput
        label="Title Color"
        name="titleColor"
        value={section.props.titleColor || "#000000"}
        placeholder="#000000"
      />
      {/* Background Color */}
      <ColorInput
        label="Background Color"
        name="backgroundColor"
        value={section.props.backgroundColor || "#ffffff"}
        placeholder="#ffffff"
      />

      {/* Testimonials List */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Testimonials
        </label>
        <div className="space-y-6">
          {(section.props.testimonials || []).map((t, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 relative"
            >
              {/* Remove button */}
              {section.props.testimonials.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveTestimonial(idx)}
                  className="absolute right-2 top-2 text-gray-400 hover:text-red-500 text-lg font-bold px-2"
                  title="Remove Testimonial"
                >
                  ×
                </button>
              )}
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Avatar URL
                </label>
                <input
                  value={t.avatar || ""}
                  onChange={(e) =>
                    handleTestimonialChange(idx, "avatar", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                  placeholder="https://..."
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Text
                </label>
                <input
                  value={t.text || ""}
                  onChange={(e) =>
                    handleTestimonialChange(idx, "text", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  value={t.name || ""}
                  onChange={(e) =>
                    handleTestimonialChange(idx, "name", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Role
                </label>
                <input
                  value={t.role || ""}
                  onChange={(e) =>
                    handleTestimonialChange(idx, "role", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                />
              </div>
              {/* Card Color */}
              <ColorInput
                label="Card Color"
                name={`cardColor-${idx}`}
                value={t.cardColor || "#ffffff"}
                placeholder="#ffffff"
                onChange={(e) =>
                  handleTestimonialColorChange(idx, "cardColor", e.target.value)
                }
              />
              {/* Quote Color (for variants that use it) */}
              <ColorInput
                label="Quote Color"
                name={`quoteColor-${idx}`}
                value={t.quoteColor || "#111827"}
                placeholder="#111827"
                onChange={(e) =>
                  handleTestimonialColorChange(
                    idx,
                    "quoteColor",
                    e.target.value
                  )
                }
              />
              {/* Border Color (for variants that use it) */}
              <ColorInput
                label="Border Color"
                name={`borderColor-${idx}`}
                value={t.borderColor || "#2563eb"}
                placeholder="#2563eb"
                onChange={(e) =>
                  handleTestimonialColorChange(
                    idx,
                    "borderColor",
                    e.target.value
                  )
                }
              />
            </div>
          ))}
          {/* Add Testimonial Button */}
          <button
            type="button"
            onClick={handleAddTestimonial}
            className="w-full mt-2 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition text-sm font-medium"
          >
            + Add Testimonial
          </button>
        </div>
      </div>
    </form>
  );
}
