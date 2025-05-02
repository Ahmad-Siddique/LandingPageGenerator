import { renderHero1 } from "./variants/hero/hero1";
import { renderHero2 } from "./variants/hero/hero2";
import { renderHero3 } from "./variants/hero/hero3";
import { renderHero4 } from "./variants/hero/hero4";

export const renderHero = (section) => {
  switch (section.variant) {
    case "Hero2":
      return renderHero2(section);
    case "Hero3":
      return renderHero3(section);
    case "Hero4":
      return renderHero4(section);
    default: // Hero1
      return renderHero1(section);
  }
};
