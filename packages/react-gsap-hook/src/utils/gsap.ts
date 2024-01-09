import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const goToSection = (section: Element, anim?: any) => {
  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration: 1,
  });

  if (anim) {
    anim.restart();
  }
};
const scrollToY = (element: Element, autoKill = false) =>
  gsap.to(window, {
    scrollTo: {
      y: element,
      autoKill: autoKill,
    },
    opacity: 1,
  });

const scrollToX = (element: Element) =>
  gsap.to(window, {
    scrollTo: {
      x: element,
      autoKill: false,
    },
    opacity: 1,
  });

const gsapUtil = {
  gsap,
  ScrollTrigger,
  goToSection,
  scrollToX,
  scrollToY,
};
export default gsapUtil;