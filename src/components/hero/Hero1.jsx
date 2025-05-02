
const ensureProtocol = (url) => {
  if (!url) return "#";
  if (/^https?:\/\//i.test(url)) return url;
  return "https://" + url;
};

const Hero1 = ({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  image,
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
    className="flex flex-col md:flex-row items-center py-16 px-4"
    style={{ backgroundColor }}
  >
    <div className="md:w-1/2 space-y-6">
      <h1 className={`${headingSize} font-bold`} style={{ color: titleColor }}>
        {title}
      </h1>
      <p className="text-xl" style={{ color: subtitleColor }}>
        {subtitle}
      </p>
      <div className="flex gap-4">
        <a
          href={ensureProtocol(primaryBtnLink)}
          className="px-6 py-3 rounded-lg"
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
          className="border-2 px-6 py-3 rounded-lg"
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
    {image && (
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={image} alt="Hero" className="rounded-lg shadow-xl w-full" />
      </div>
    )}
  </section>
);

// Enhanced contrast checker
const getContrastColor = (hexColor) => {
  if (!hexColor) return "#ffffff";
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
};

export default Hero1;
