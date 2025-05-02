export const renderFeatures4 = (section) => `
  <section class="py-16" style="background-color: ${
    section.props.backgroundColor || "#ffffff"
  }">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10" style="color: ${
        section.props.titleColor || "#000000"
      }">
        ${section.props.title || ""}
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        ${(section.props.features || [])
          .map(
            (feature) => `
          <div class="p-4 rounded-xl transition hover:bg-gray-50" style="background-color: ${
            feature.cardColor || "transparent"
          }">
            <div class="text-4xl mb-4">${feature.icon || ""}</div>
            <h3 class="text-lg font-semibold">${feature.heading || ""}</h3>
            <p class="text-gray-600 text-sm mt-2">${feature.text || ""}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
