const Hero2 = ({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  headingSize = "text-5xl",
  primaryColor = "#2563eb",
  secondaryColor = "#1e293b",
  backgroundColor = "#ffffff",
  titleColor = "#000000",
  subtitleColor = "#4b5563",
  primaryBtnLink = "#",
  secondaryBtnLink = "#",
}) => (
  <section
    className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center"
    style={{ backgroundColor }}
  >
    <h1
      className={`${headingSize} font-extrabold mb-4`}
      style={{ color: titleColor }}
    >
      {title}
    </h1>
    <p className="text-lg md:text-xl mb-8" style={{ color: subtitleColor }}>
      {subtitle}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={primaryBtnLink}
        className="px-8 py-3 rounded-full font-medium shadow-sm"
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
        className="px-8 py-3 rounded-full font-medium border"
        style={{
          borderColor: secondaryColor,
          color: secondaryColor,
          textDecoration: "none",
        }}
      >
        {secondaryBtn}
      </a>
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

export default Hero2;
