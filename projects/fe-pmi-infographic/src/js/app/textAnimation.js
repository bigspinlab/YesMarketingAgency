const textAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const textContainers = gsap.utils.toArray(".js-gsap-text");
  const pinnedSection = document.querySelector(".js-gsap-pinned");

  const animationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      scrub: true,
    },
  })

  textContainers.forEach((text) => {
    animationTimeline.fromTo(text, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      yoyo: true,
      repeat: 1,
    })
  });
}

textAnimations();