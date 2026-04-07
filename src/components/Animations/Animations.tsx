import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animate(
  appRef: React.RefObject<HTMLElement | null>,
  heroRef: React.RefObject<HTMLElement | null>,
  nameRef: React.RefObject<HTMLElement | null>,
  bioRef: React.RefObject<HTMLElement | null>,
  laptopRef: React.RefObject<HTMLElement | null>,
  infoRef: React.RefObject<HTMLElement | null>,
) {
  const app = appRef.current;
  const hero = heroRef.current;
  const name = nameRef.current;
  const bio = bioRef.current;
  const laptop = laptopRef.current;
  const info = infoRef.current;

  const tl = gsap.timeline({ delay: 1 });

  tl.fromTo(hero, { opacity: 0, x: 200 }, { opacity: 1, x: 0 })
    .fromTo(name, { y: -10, opacity: 0, delay: 1 }, { y: 10, opacity: 1 })
    .fromTo(bio, { y: -10, opacity: 0 }, { y: 10, opacity: 1 })
    .fromTo(laptop, { y: 20, opacity: 0 }, { y: 10, opacity: 1 })
    .fromTo(info, { y: 20, opacity: 0 }, { y: 10, opacity: 1 });

  ScrollTrigger.create({
    trigger: app,
    start: "top 80%",
    animation: tl,
    toggleActions: "play none none none",
  });
}

export function createScrollTrigger(
  ref: React.RefObject<HTMLElement | null>,
  animation: gsap.core.Timeline,
  start: string,
) {
  ScrollTrigger.create({
    trigger: ref.current,
    animation,
    toggleActions: "play none none none",
    start,
  });
}

export function createTitleAnimation(
  titleRef: React.RefObject<HTMLElement | null>,
) {
  return gsap.fromTo(
    titleRef.current,
    { autoAlpha: 0, y: 20 },
    { duration: 1, autoAlpha: 1, y: 0 },
  );
}

export function createParagraphAnimation(
  paragraphRef: React.RefObject<HTMLElement | null>,
) {
  return gsap.fromTo(
    paragraphRef.current,
    { autoAlpha: 0, y: 10 },
    { duration: 0.75, autoAlpha: 1, y: 0 },
  );
}

export function createButtonAnimation(
  buttonRef: React.RefObject<HTMLElement | null>,
) {
  return gsap.fromTo(
    buttonRef.current,
    { autoAlpha: 0, y: 10 },
    { duration: 1, autoAlpha: 1, y: 0 },
  );
}

export function createDescriptionAnimation(
  purposeRef: React.RefObject<HTMLElement | null>,
) {
  return gsap.fromTo(
    purposeRef.current,
    { autoAlpha: 0, y: 10 },
    { duration: 1, autoAlpha: 1, y: 0 },
  );
}

export function createImageAnimation(
  imageRef: React.RefObject<HTMLElement | null>,
) {
  return gsap.fromTo(
    imageRef.current,
    { autoAlpha: 0, y: 10 },
    { duration: 1, autoAlpha: 1, y: 0 },
  );
}
