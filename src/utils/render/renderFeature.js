import { renderFeatures1 } from "./variants/feature/feature1";
import { renderFeatures2 } from "./variants/feature/feature2";
import { renderFeatures3 } from "./variants/feature/feature3";
import { renderFeatures4 } from "./variants/feature/feature4";

export const renderFeatures = (section) => {
  switch (section.variant) {
    case "Features2":
      return renderFeatures2(section);
    case "Features3":
      return renderFeatures3(section);
    case "Features4":
      return renderFeatures4(section);
    default:
      return renderFeatures1(section);
  }
};
