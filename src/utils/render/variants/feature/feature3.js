export const renderFeatures3 = (section) => `
  <section class="py-16" style="background-color: ${
    section.props.backgroundColor || "#ffffff"
  }">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10" style="color: ${
        section.props.titleColor || "#000000"
      }">
        ${section.props.title || ""}
      </h2>
      <div class="space-y-6">
        ${(section.props.features || [])
          .map(
            (feature) => `
          <div class="p-6 rounded-xl shadow hover:shadow-lg transition flex items-start gap-6" style="background-color: ${
            feature.cardColor || "#f3f4f6"
          }">
            <div class="text-4xl flex-shrink-0">${feature.icon || ""}</div>
            <div>
              <h3 class="text-xl font-semibold mb-2">${
                feature.heading || ""
              }</h3>
              <p class="text-gray-600">${feature.text || ""}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
