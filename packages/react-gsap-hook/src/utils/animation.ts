export const tweenClear = (anim: gsap.core.Tween) => {
    if (!anim.isActive) {
      anim.pause(0).kill();
    } else {
      setTimeout(() => {
        tweenClear(anim);
      }, 10);
    }
  };
  
  export const timelineClear = (anim: gsap.core.Timeline) => {
    if (!anim.isActive) {
      anim.pause(0).kill();
    } else {
      setTimeout(() => {
        timelineClear(anim);
      }, 10);
    }
  };
  