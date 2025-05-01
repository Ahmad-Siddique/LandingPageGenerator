import { useEffect, useState } from "react";
import { renderSection } from "../utils/renderSection";

export default function PreviewPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("preview-data");
      if (savedData) {
        setSections(JSON.parse(savedData));
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <script src="https://cdn.tailwindcss.com"></script>
      {sections.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No sections to preview. Please build your page first.
        </div>
      ) : (
        sections.map((section, index) => (
          <div key={index}>
            <div dangerouslySetInnerHTML={{ __html: renderSection(section) }} />
          </div>
        ))
      )}
    </div>
  );
}
