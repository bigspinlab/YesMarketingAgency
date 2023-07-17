gsap.registerPlugin(ScrollTrigger);

function gsapFadeAnimation(animationType, initialY, initialX) {
  const animatedContainers = gsap.utils.toArray(`[data-gsap="${animationType}"]`)

  animatedContainers.forEach(
    (animation) => {
      let delayedAnimation = 0;
      if (animation.hasAttribute("data-gsap-delay")) {
        delayedAnimation =
          Number(animation.getAttribute("data-gsap-delay")) / 1000;
      }

      const animationFade = gsap.fromTo(
        animation, {
          autoAlpha: 0,
          y: initialY,
          x: initialX
        }, {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          x: 0,
          delay: delayedAnimation
        }
      );
      ScrollTrigger.create({
        trigger: animation,
        animation: animationFade,
        toggleActions: "restart none none none", // change first to play if is only once
        //once: true, // uncomment if is only once
      });
    }
  );
}

function initAnimations() {
  gsapFadeAnimation('fade-up', 100, 0);
  gsapFadeAnimation('fade-in', 0, 0);
  gsapFadeAnimation('fade-from-left', 0, -100);
  gsapFadeAnimation('fade-from-right', 0, 100);
}

initAnimations();