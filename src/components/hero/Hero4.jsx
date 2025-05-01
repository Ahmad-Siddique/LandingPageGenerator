const Hero4 = ({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  headingSize = "text-5xl",
  primaryColor = "#2563eb",
  secondaryColor = "#1e293b",
  backgroundColor = "#fff",
  titleColor = "#000000",
  subtitleColor = "#4b5563",
  primaryBtnLink = "#",
  secondaryBtnLink = "#",
}) => (
  <section
    className="py-20 px-4 border-t-4"
    style={{ backgroundColor, borderTopColor: primaryColor }}
  >
    <div className="max-w-2xl mx-auto text-center">
      <h1
        className={`${headingSize} font-bold mb-4`}
        style={{ color: titleColor }}
      >
        {title}
      </h1>
      <p className="text-lg mb-8" style={{ color: subtitleColor }}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={primaryBtnLink}
          className="px-8 py-3 rounded-lg font-medium"
          style={{
            backgroundColor: primaryColor,
            color: getContrastColor(primaryColor),
            textDecoration: "none",
          }}
        >
          {primaryBtn}
        </a>
        <a
          href={secondaryBtnLink}
          className="border-2 px-8 py-3 rounded-lg font-medium"
          style={{
            borderColor: secondaryColor,
            color: secondaryColor,
            textDecoration: "none",
          }}
        >
          {secondaryBtn}
        </a>
      </div>
    </div>
  </section>
);

const getContrastColor = (hexColor) => {
  if (!hexColor) return "#ffffff";
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
};
export default Hero4;
