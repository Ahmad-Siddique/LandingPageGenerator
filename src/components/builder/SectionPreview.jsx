import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

// Import section components from correct paths
import Hero1 from "../hero/Hero1";
import Hero2 from "../hero/Hero2";
import Hero3 from "../hero/Hero3";
import Hero4 from "../hero/Hero4";
// import Hero2 from "../sections/Hero/Hero2";
// import Hero3 from "../sections/Hero/Hero3";
// import Hero4 from "../sections/Hero/Hero4";

import Features1 from "../feature/Feature1";
// import Features2 from "../Features/Features2";

import Testimonials1 from "../testimonials/Testimonials1";
import CTA1 from "../cta/CTA1";

// Map section type+variant to component
const sectionComponents = {
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Features1,
  // Features2,
  Testimonials1,
  CTA1,
};

export default function SectionPreview({ section }) {
  const { selectedSectionId, setSelectedSectionId } =
    useContext(BuilderContext);

  // Get component variant (e.g., Hero1 from 'Hero1')
  const componentKey = `${section.type}${section.variant.replace(
    section.type,
    ""
  )}`;
  const Component = sectionComponents[componentKey];

  if (!Component) {
    return (
      <div className="border p-4 bg-red-100">
        Component {componentKey} not found
      </div>
    );
  }

  return (
    <div
      className={`mb-6 border-2 rounded-lg p-2 cursor-pointer transition-all ${
        selectedSectionId === section.id
          ? "border-blue-500 shadow-lg"
          : "border-transparent"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedSectionId(section.id);
      }}
    >
      <Component {...section.props} />
    </div>
  );
}
