import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";


import HeroEditor from "./SectionEditorSections/HeroEditor";
import FeaturesEditor from "./SectionEditorSections/FeatureEditor";
// import TestimonialsEditor from "./TestimonialsEditor";
// import CTAEditor from "./CTAEditor";

export default function SectionEditor() {
  const { sections, selectedSectionId } = useContext(BuilderContext);
  const selectedSection = sections.find((s) => s.id === selectedSectionId);

  return (
    <aside className="w-80 p-8 border-l border-gray-200 bg-white/80 backdrop-blur-md h-[calc(100vh-80px)] overflow-y-auto">
      <h3 className="text-xl font-bold mb-8 tracking-tight text-gray-900">
        Section Editor
      </h3>
      {selectedSection?.type === "Hero" && (
        <HeroEditor section={selectedSection} />
      )}
      {selectedSection?.type === "Features" && (
        <FeaturesEditor section={selectedSection} />
      )}
      {/* {selectedSection?.type === "Testimonials" && (
        <TestimonialsEditor section={selectedSection} />
      )}
      {selectedSection?.type === "CTA" && (
        <CTAEditor section={selectedSection} />
      )} */}
      {!selectedSection && (
        <div className="text-gray-400 text-center mt-10">
          Select a section to edit
        </div>
      )}
    </aside>
  );
}
