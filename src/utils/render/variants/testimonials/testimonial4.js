export const renderTestimonials4 = (section) => `
  <section style="background-color: ${
    section.props.backgroundColor || "#ffffff"
  }; padding-top: 4rem; padding-bottom: 4rem;">
    <div style="max-width: 80rem; margin: 0 auto; padding-left: 1rem; padding-right: 1rem;">
      <h2 style="color: ${
        section.props.titleColor || "#000000"
      }; font-size: 1.875rem; font-weight: 700; text-align: center; margin-bottom: 2.5rem;">
        ${section.props.title || ""}
      </h2>
      <div style="display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
        ${(section.props.testimonials || [])
          .map(
            (t) => `
          <div style="background: ${
            t.cardColor || "#f3f4f6"
          }; border-top: 4px solid ${
              t.borderColor || "#2563eb"
            }; border-radius: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 1.5rem; text-align: center;">
            ${
              t.avatar
                ? `<img src="${t.avatar}" alt="${t.name}" style="width: 3.5rem; height: 3.5rem; margin: 0 auto 0.75rem; border-radius: 9999px; object-fit: cover;" />`
                : ""
            }
            <p style="font-style: italic; margin-bottom: 0.75rem; font-size: 1rem; color: ${
              t.quoteColor || "#4b5563"
            };">&ldquo;${t.text}&rdquo;</p>
            <div style="font-weight: 600;">${t.name}</div>
            <div style="font-size: 0.875rem; color: ${
              t.quoteColor ? `${t.quoteColor}80` : "#6b7280"
            };">${t.role}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
