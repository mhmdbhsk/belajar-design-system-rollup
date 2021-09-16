/**
 * A hook which manages scrolling.
 *
 * {options} expects: { x: number, y: number, isSmooth: boolean }.
 */
export function useScroller({
  x,
  y,
  isSmooth = false,
}: {
  x: number;
  y: number;
  isSmooth?: boolean;
}) {
  // Check if `window` exists incase this
  // hook is ran in NodeJS which doesn't have
  // a global `window` variable.
  if (!window) {
    return;
  }

  // Modern browsers provide a scrolling interface!
  return function scroller() {
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? "smooth" : "auto",
    });
  };
}
