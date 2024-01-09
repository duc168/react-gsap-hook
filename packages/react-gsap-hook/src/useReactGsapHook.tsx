import { useEffect } from 'react';
import gsapUtil from './utils/gsap';
import { tweenClear } from './utils/animation';

const useReactGSAP = (
  inView: boolean,
  animClassName: string,
  fromTween: gsap.TweenVars,
  toTween: gsap.TweenVars,
  isReversed = true,
) => {
  useEffect(() => {
    if (inView) {
      const anim = gsapUtil.gsap.fromTo('.' + animClassName, fromTween, toTween);
      return () => {
        tweenClear(anim);
      };
    } else {
      if (isReversed === true) {
        const anim = gsapUtil.gsap.fromTo('.' + animClassName, toTween, fromTween);
        return () => {
          tweenClear(anim);
        };
      }
      return () => {};
    }
  }, [inView]);
};

export default useReactGSAP;