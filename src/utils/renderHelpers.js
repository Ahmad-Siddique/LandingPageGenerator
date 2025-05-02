export const getContrastColor = (hexColor) => {
  if (!hexColor) return "#ffffff";
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
};

export const imageTemplate = (image) =>
  image
    ? `
    <div class="md:w-1/2 mt-8 md:mt-0">
      <img src="${image}" alt="Hero" class="rounded-lg shadow-xl w-full" />
    </div>
  `
    : "";
