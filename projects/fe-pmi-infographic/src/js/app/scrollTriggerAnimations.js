gsap.registerPlugin(ScrollTrigger);

function gsapFadeAnimation(animationType, initialY, initialX) {
  const animatedContainers = gsap.utils.toArray(`[data-gsap="${animationType}"]`)

  animatedContainers.forEach(
    (animatedItem) => {
      let delayedAnimation = 0;
      if (animatedItem.hasAttribute("data-gsap-delay")) {
        delayedAnimation =
          Number(animatedItem.getAttribute("data-gsap-delay")) / 1000;
      }

      gsap.set(animatedItem, {
        autoAlpha: 0,
        y: initialY,
        x: initialX
      })

      gsap.to(
        animatedItem, {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
          x: 0,
          delay: delayedAnimation,
          scrollTrigger: {
            trigger: animatedItem,
            start: "top 71%",
            scrub: true,
            toggleActions: "play none none none", // change first to play if is only once
          }
        }
      )
    }
  );
}

function initAnimations() {
  gsapFadeAnimation('fade-up', 100, 0);
  gsapFadeAnimation('fade-in', 0, 0);
  gsapFadeAnimation('fade-from-left', 0, -100);
  gsapFadeAnimation('fade-from-right', 0, 100);
}

function callAfterResize(func, delay) {
  let dc = gsap.delayedCall(delay || 0.2, func).pause(),
    handler = () => dc.restart(true);
  window.addEventListener("resize", handler);
  return handler; // in case you want to window.removeEventListener() later
}

callAfterResize(initAnimations());
