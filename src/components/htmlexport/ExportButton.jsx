import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { renderSection } from "../../utils/renderSection";

export default function ExportButton() {
  const { sections } = useContext(BuilderContext);

  const exportHTML = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Landing Page</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-white">
        ${sections
          .map(
            (section) => `
          <!-- ${section.type} Section -->
          ${renderSection(section)}
        `
          )
          .join("\n")}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportHTML}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
    >
      Export HTML
    </button>
  );
}
