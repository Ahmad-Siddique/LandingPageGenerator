import { renderHero } from "./render/renderHero";
import { renderFeatures } from "./render/renderFeature";
// import { renderTestimonials } from "./renderTestimonials";
// import { renderCTA } from "./renderCTA";

export const renderSection = (section) => {
  if (!section || !section.type) return "";

  switch (section.type) {
    case "Hero":
      return renderHero(section);
    case "Features":
      return renderFeatures(section);
    // case "Testimonials":
    //   return renderTestimonials(section);
    // case "CTA":
    //   return renderCTA(section);
    default:
      return "";
  }
};

// Helper for button text contrast
export const getContrastColor = (hexColor) => {
  if (!hexColor) return "#ffffff";
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
};
