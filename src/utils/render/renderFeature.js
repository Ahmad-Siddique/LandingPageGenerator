

export const renderFeatures = (section) => `
  <section class="py-16" style="background-color: ${
    section.props.backgroundColor || "#ffffff"
  }">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10" style="color: ${
        section.props.titleColor || "#000000"
      }">
        ${section.props.title || ""}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${(section.props.features || [])
          .map(
            (feature) => `
          <div class="p-6 rounded-xl shadow hover:shadow-lg transition" style="background-color: ${
            feature.cardColor || "#f3f4f6"
          }">
            ${
              feature.icon
                ? `<div class="mb-4 text-4xl">${feature.icon}</div>`
                : ""
            }
            ${
              feature.heading
                ? `<h3 class="text-xl font-semibold mb-2">${feature.heading}</h3>`
                : ""
            }
            ${
              feature.text ? `<p class="text-gray-600">${feature.text}</p>` : ""
            }
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
