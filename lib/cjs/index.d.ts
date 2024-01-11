import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

declare const tweenClear: (anim: gsap.core.Tween) => void;
declare const timelineClear: (anim: gsap.core.Timeline) => void;

declare const gsapUtil: {
    gsap: typeof globalThis.gsap;
    ScrollTrigger: typeof ScrollTrigger;
    goToSection: (section: Element, anim?: any) => void;
    scrollToX: (element: Element) => gsap.core.Tween;
    scrollToY: (element: Element, autoKill?: boolean) => gsap.core.Tween;
};

declare const useReactGsap: (inView: boolean, animClassName: string, fromTween: gsap.TweenVars, toTween: gsap.TweenVars, isReversed?: boolean) => void;

export { gsapUtil, timelineClear, tweenClear, useReactGsap };
//# sourceMappingURL=index.d.ts.map
