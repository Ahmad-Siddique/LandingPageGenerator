import { useContext, useState } from "react";
import { BuilderContext } from "../../context/BuilderContext";

const sectionLabels = {
  Hero: "Hero",
  Features: "Features",
  Testimonials: "Testimonials",
  CTA: "Call To Action",
};

const heroDesigns = [
  { value: "Hero1", label: "Minimal Left Image" },
  { value: "Hero2", label: "Centered Bold" },
  { value: "Hero3", label: "Left Image, Minimal Text" },
  { value: "Hero4", label: "Top Border Accent" },
];

export default function AddSectionPanel() {
  const { addSection } = useContext(BuilderContext);
  const [selectedHeroDesign, setSelectedHeroDesign] = useState(
    heroDesigns[0].value
  );

  const handleAddSection = (sectionType) => {
    if (sectionType === "Hero") {
      addSection({ type: "Hero", variant: selectedHeroDesign });
    } else {
      addSection(sectionType);
    }
  };

  return (
    <aside className="w-64 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 tracking-tight">
        Add Section
      </h3>
      <div className="space-y-4">
        {/* Hero Section with dropdown */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">
            Hero Design
          </label>
          <select
            value={selectedHeroDesign}
            onChange={(e) => setSelectedHeroDesign(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-200 transition"
          >
            {heroDesigns.map((design) => (
              <option key={design.value} value={design.value}>
                {design.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleAddSection("Hero")}
            className="mt-2 w-full p-2 bg-gray-100 rounded hover:bg-gray-900 hover:text-white transition cursor-pointer font-medium"
          >
            + Add Hero Section
          </button>
        </div>

        {/* Other sections */}
        {Object.keys(sectionLabels)
          .filter((type) => type !== "Hero")
          .map((sectionType) => (
            <button
              key={sectionType}
              onClick={() => handleAddSection(sectionType)}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-700 font-medium group transition duration-200 ease-in-out hover:bg-gray-900 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
              style={{ fontWeight: 500 }}
            >
              <span className="text-gray-400 text-xl transition-colors duration-200 group-hover:text-white">
                +
              </span>
              <span>{sectionLabels[sectionType]}</span>
            </button>
          ))}
      </div>
    </aside>
  );
}
