// renderHero2.js
import { getContrastColor } from "../../../renderHelpers";

export const renderHero2 = (section) => `
  <section class="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center"
           style="background-color: ${
             section.props.backgroundColor || "#ffffff"
           }">
    <h1 class="${section.props.headingSize || "text-5xl"} font-extrabold mb-4"
        style="color: ${section.props.titleColor || "#000000"}">
      ${section.props.title || ""}
    </h1>
    <p class="text-lg md:text-xl mb-8" style="color: ${
      section.props.subtitleColor || "#4b5563"
    }">
      ${section.props.subtitle || ""}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="${section.props.primaryBtnLink || "#"}"
         class="px-8 py-3 rounded-full font-medium shadow-sm"
         style="background-color: ${section.props.primaryColor || "#2563eb"}; 
                color: ${getContrastColor(
                  section.props.primaryColor || "#2563eb"
                )}">
        ${section.props.primaryBtn || ""}
      </a>
      <a href="${section.props.secondaryBtnLink || "#"}"
         class="border-2 px-8 py-3 rounded-full font-medium"
         style="border-color: ${section.props.secondaryColor || "#1e293b"};
                color: ${section.props.secondaryColor || "#1e293b"}">
        ${section.props.secondaryBtn || ""}
      </a>
    </div>
  </section>
`;
