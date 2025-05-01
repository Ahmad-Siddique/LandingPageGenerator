import { useContext } from "react";
import { BuilderContext } from "../../../context/BuilderContext";

export default function FeaturesEditor({ section }) {
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

  // For features array fields
  const handleFeatureChange = (idx, field, value) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const features = s.props.features.map((f, i) =>
          i === idx ? { ...f, [field]: value } : f
        );
        return { ...s, props: { ...s.props, features } };
      })
    );
  };

  // For feature card color
  const handleFeatureColorChange = (idx, value) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const features = s.props.features.map((f, i) =>
          i === idx ? { ...f, cardColor: value } : f
        );
        return { ...s, props: { ...s.props, features } };
      })
    );
  };

  // Add a new feature card
  const handleAddFeature = () => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const features = [
          ...s.props.features,
          {
            icon: "✨",
            heading: "New Feature",
            text: "Describe your feature.",
            cardColor: "#f3f4f6",
          },
        ];
        return { ...s, props: { ...s.props, features } };
      })
    );
  };

  // Remove a feature card
  const handleRemoveFeature = (idx) => {
    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        const features = s.props.features.filter((_, i) => i !== idx);
        return { ...s, props: { ...s.props, features } };
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

      {/* Features List */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Features
        </label>
        <div className="space-y-6">
          {(section.props.features || []).map((feature, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 relative"
            >
              {/* Remove button */}
              {section.props.features.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(idx)}
                  className="absolute right-2 top-2 text-gray-400 hover:text-red-500 text-lg font-bold px-2"
                  title="Remove Feature"
                >
                  ×
                </button>
              )}
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Icon (Emoji or SVG)
                </label>
                <input
                  value={feature.icon || ""}
                  onChange={(e) =>
                    handleFeatureChange(idx, "icon", e.target.value)
                  }
                  className="w-16 p-2 border border-gray-200 rounded text-lg"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Heading
                </label>
                <input
                  value={feature.heading || ""}
                  onChange={(e) =>
                    handleFeatureChange(idx, "heading", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Text
                </label>
                <input
                  value={feature.text || ""}
                  onChange={(e) =>
                    handleFeatureChange(idx, "text", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  autoComplete="off"
                />
              </div>
              <ColorInput
                label="Card Color"
                name={`cardColor-${idx}`}
                value={feature.cardColor || "#f3f4f6"}
                placeholder="#f3f4f6"
                onChange={(e) => handleFeatureColorChange(idx, e.target.value)}
              />
            </div>
          ))}
          {/* Add Feature Button */}
          <button
            type="button"
            onClick={handleAddFeature}
            className="w-full mt-2 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition text-sm font-medium"
          >
            + Add Feature
          </button>
        </div>
      </div>
    </form>
  );
}
