import { getContrastColor } from "../renderSection";




export const renderHero = (section) => `
  <section 
    class="flex flex-col md:flex-row items-center py-16 px-4"
    style="background-color: ${section.props.backgroundColor || "#ffffff"}"
  >
    <div class="md:w-1/2 space-y-6">
      <h1 
        class="${section.props.headingSize || "text-5xl"} font-bold"
        style="color: ${section.props.titleColor || "#000000"}"
      >
        ${section.props.title || ""}
      </h1>
      <p 
        class="text-xl"
        style="color: ${section.props.subtitleColor || "#4b5563"}"
      >
        ${section.props.subtitle || ""}
      </p>
      <div class="flex gap-4">
        <a
          href="${section.props.primaryBtnLink || "#"}"
          class="px-6 py-3 rounded-lg"
          style="background-color: ${
            section.props.primaryColor || "#2563eb"
          }; color: ${getContrastColor(
  section.props.primaryColor || "#2563eb"
)}"
        >
          ${section.props.primaryBtn || ""}
        </a>
        <a
          href="${section.props.secondaryBtnLink || "#"}"
          class="border-2 px-6 py-3 rounded-lg"
          style="border-color: ${
            section.props.secondaryColor || "#1e293b"
          }; color: ${section.props.secondaryColor || "#1e293b"}"
        >
          ${section.props.secondaryBtn || ""}
        </a>
      </div>
    </div>
    ${
      section.props.image
        ? `
      <div class="md:w-1/2 mt-8 md:mt-0">
        <img 
          src="${section.props.image}" 
          alt="Hero" 
          class="rounded-lg shadow-xl w-full" 
        />
      </div>
    `
        : ""
    }
  </section>
`;

