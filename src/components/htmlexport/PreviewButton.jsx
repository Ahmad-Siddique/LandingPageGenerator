// src/components/htmlexport/PreviewButton.jsx
import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function PreviewButton() {
  const { sections } = useContext(BuilderContext);

  const handlePreview = () => {
    // Save sections to localStorage
    localStorage.setItem("preview-data", JSON.stringify(sections));
    // Open preview in new tab
    window.open("/preview", "_blank");
  };

  return (
    <button
      onClick={handlePreview}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-4"
    >
      Preview
    </button>
  );
}
