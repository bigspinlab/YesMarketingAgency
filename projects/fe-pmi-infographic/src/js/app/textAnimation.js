const textAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const textContainers = gsap.utils.toArray(".js-gsap-text");
  const pinnedSection = document.querySelector(".js-gsap-pinned");

  if (!textContainers.length || !pinnedSection) return;
  
  const animationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      scrub: 1,
      end: () => "+=" + pinnedSection.offsetHeight * (textContainers.length - 1),
    },
  })

  textContainers.forEach((text) => {
    animationTimeline.fromTo(text, {
      lazy: false,
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