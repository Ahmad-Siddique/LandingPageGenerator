import { renderTestimonials1 } from "./variants/testimonials/testimonial1";
import { renderTestimonials2 } from "./variants/testimonials/testimonial2";
import { renderTestimonials3 } from "./variants/testimonials/testimonial3";
import { renderTestimonials4 } from "./variants/testimonials/testimonial4";

export const renderTestimonials = (section) => {
  switch (section.variant) {
    case "Testimonials2":
      return renderTestimonials2(section);
    case "Testimonials3":
      return renderTestimonials3(section);
    case "Testimonials4":
      return renderTestimonials4(section);
    default:
      return renderTestimonials1(section);
  }
};
