export const renderFeatures2 = (section) => `
  <section class="py-16 overflow-x-hidden" style="background-color: ${
    section.props.backgroundColor || "#ffffff"
  }">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10" style="color: ${
        section.props.titleColor || "#000000"
      }">
        ${section.props.title || ""}
      </h2>
      <div class="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
        ${(section.props.features || [])
          .map(
            (feature) => `
          <div class="flex-shrink-0 w-72 p-6 rounded-xl shadow hover:shadow-lg transition" style="background-color: ${
            feature.cardColor || "#f3f4f6"
          }">
            <div class="mb-4 text-4xl">${feature.icon || ""}</div>
            <h3 class="text-xl font-semibold mb-2">${feature.heading || ""}</h3>
            <p class="text-gray-600">${feature.text || ""}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
