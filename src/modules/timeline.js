import "https://argyleink.github.io/scroll-timeline/dist/scroll-timeline.js";

const { matches: motionOK } = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
);

/* GRAB ELEMENTS */
const tabGroup = document.querySelector("snap-tabs");
const tabSection = tabGroup.querySelector(":scope > section");
const tabNav = tabGroup.querySelector(":scope nav");
const tabNavItems = tabNav.queryselector(":scope a");
const tabIndicator = tabGroup.querySelector(":scope .snap-indicator");
