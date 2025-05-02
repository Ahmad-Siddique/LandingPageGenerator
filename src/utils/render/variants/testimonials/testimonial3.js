export const renderTestimonials3 = (section) => `
  <section style="background-color: ${
    section.props.backgroundColor || "#f8fafc"
  }; padding-top: 4rem; padding-bottom: 4rem;">
    <div style="max-width: 48rem; margin: 0 auto; padding-left: 1rem; padding-right: 1rem;">
      <h2 style="color: ${
        section.props.titleColor || "#000000"
      }; font-size: 1.875rem; font-weight: 700; text-align: center; margin-bottom: 2.5rem;">
        ${section.props.title || ""}
      </h2>
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${(section.props.testimonials || [])
          .map(
            (t) => `
          <div style="background: ${
            t.cardColor || "#ffffff"
          }; border: 1px solid ${
              t.borderColor || "#e5e7eb"
            }; border-radius: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 2rem; text-align: center;">
            <blockquote style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${
              t.quoteColor || "#111827"
            }; line-height: 1.3;">&ldquo;${t.text}&rdquo;</blockquote>
            <div style="font-weight: 500; color: ${
              t.quoteColor || "#111827"
            };">${t.name}</div>
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
