const Hero3 = ({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  image,
  headingSize = "text-5xl",
  primaryColor = "#2563eb",
  secondaryColor = "#1e293b",
  backgroundColor = "#f9fafb",
  titleColor = "#000000",
  subtitleColor = "#4b5563",
  primaryBtnLink = "#",
  secondaryBtnLink = "#",
}) => (
  <section
    className="flex flex-col md:flex-row items-center py-16 px-4"
    style={{ backgroundColor }}
  >
    <div className="md:w-1/2 mb-10 md:mb-0">
      {image && (
        <img
          src={image}
          alt="Hero"
          className="rounded-2xl shadow w-full max-w-md mx-auto"
        />
      )}
    </div>
    <div className="md:w-1/2 md:pl-12">
      <h1
        className={`${headingSize} font-semibold mb-4`}
        style={{ color: titleColor }}
      >
        {title}
      </h1>
      <p className="text-lg mb-8" style={{ color: subtitleColor }}>
        {subtitle}
      </p>
      <div className="flex gap-4">
        <a
          href={primaryBtnLink}
          className="px-6 py-2 rounded-lg font-medium"
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
          className="border-2 px-6 py-2 rounded-lg font-medium"
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
export default Hero3;