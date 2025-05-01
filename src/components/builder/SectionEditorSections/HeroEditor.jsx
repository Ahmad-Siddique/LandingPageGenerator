import { useContext } from "react";
import { BuilderContext } from "../../../context/BuilderContext";

export default function HeroEditor({ section }) {
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

  const ColorInput = ({ label, name, value, placeholder = "#000000" }) => (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          name={name}
          value={value}
          onChange={handleChange}
          className="w-7 h-7 rounded-full border-2 border-gray-200 shadow-sm cursor-pointer transition hover:border-gray-400"
          style={{ background: "transparent" }}
        />
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );

  return (
    <form className="space-y-6">
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
      <ColorInput
        label="Title Color"
        name="titleColor"
        value={section.props.titleColor || "#000000"}
        placeholder="#000000"
      />
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Subtitle
        </label>
        <input
          name="subtitle"
          value={section.props.subtitle || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          autoComplete="off"
        />
      </div>
      <ColorInput
        label="Subtitle Color"
        name="subtitleColor"
        value={section.props.subtitleColor || "#4b5563"}
        placeholder="#4b5563"
      />
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Primary Button Text
        </label>
        <input
          name="primaryBtn"
          value={section.props.primaryBtn || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Primary Button Link
        </label>
        <input
          name="primaryBtnLink"
          value={section.props.primaryBtnLink || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          placeholder="https://example.com"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Secondary Button Text
        </label>
        <input
          name="secondaryBtn"
          value={section.props.secondaryBtn || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Secondary Button Link
        </label>
        <input
          name="secondaryBtnLink"
          value={section.props.secondaryBtnLink || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          placeholder="https://example.com"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Image URL
        </label>
        <input
          name="image"
          type="url"
          value={section.props.image || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Heading Size
        </label>
        <select
          name="headingSize"
          value={section.props.headingSize || "text-5xl"}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-sm"
        >
          <option value="text-3xl">Large (3xl)</option>
          <option value="text-4xl">X-Large (4xl)</option>
          <option value="text-5xl">XX-Large (5xl)</option>
          <option value="text-6xl">XXX-Large (6xl)</option>
        </select>
      </div>
      <ColorInput
        label="Background Color"
        name="backgroundColor"
        value={section.props.backgroundColor || "#ffffff"}
        placeholder="#FFFFFF"
      />
      <ColorInput
        label="Primary Button Color"
        name="primaryColor"
        value={section.props.primaryColor || "#2563eb"}
        placeholder="#2563eb"
      />
      <ColorInput
        label="Secondary Button Color"
        name="secondaryColor"
        value={section.props.secondaryColor || "#1e293b"}
        placeholder="#1e293b"
      />
    </form>
  );
}
