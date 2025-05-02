// renderHero4.js
import { getContrastColor } from "../../../renderHelpers";

export const renderHero4 = (section) => `
  <section class="py-20 px-4 border-t-4"
           style="background-color: ${section.props.backgroundColor || "#fff"};
                  border-top-color: ${section.props.primaryColor || "#2563eb"}">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="${section.props.headingSize || "text-5xl"} font-bold mb-4"
          style="color: ${section.props.titleColor || "#000000"}">
        ${section.props.title || ""}
      </h1>
      <p class="text-lg mb-8" style="color: ${
        section.props.subtitleColor || "#4b5563"
      }">
        ${section.props.subtitle || ""}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="${section.props.primaryBtnLink || "#"}"
           class="px-8 py-3 rounded-lg font-medium"
           style="background-color: ${section.props.primaryColor || "#2563eb"};
                  color: ${getContrastColor(
                    section.props.primaryColor || "#2563eb"
                  )}">
          ${section.props.primaryBtn || ""}
        </a>
        <a href="${section.props.secondaryBtnLink || "#"}"
           class="border-2 px-8 py-3 rounded-lg font-medium"
           style="border-color: ${section.props.secondaryColor || "#1e293b"};
                  color: ${section.props.secondaryColor || "#1e293b"}">
          ${section.props.secondaryBtn || ""}
        </a>
      </div>
    </div>
  </section>
`;
