/**
 * This whole file with the requestAnimationFrame is for performance. There seems
 * to be a real difference between using this code and just a normal event listener for
 * scroll. Not gonna lie I didn't really profile it, it was just perception at 6x slowdown
 * in the browser
 */

let latestKnownScrollY = 0;
let latestKnownScrollX = 0;
let ticking = false;

const update = ({
  headerRef,
  timeColumnRef,
  cornerRef,
  timeIndicatorRef,
  stepLinesRef
}) => () => {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;

  headerRef.current.style.transform = `translateY(${latestKnownScrollY}px)`;
  timeColumnRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;

  timeIndicatorRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;
  timeIndicatorRef.current.style.width = `calc(100% - ${latestKnownScrollX}px)`;

  stepLinesRef.current.style.width = `calc(100% + ${latestKnownScrollX}px)`;

  // For some reason translateX doesn't work here. I'm not sure why but whatever
  cornerRef.current.style.left = `${latestKnownScrollX}px`;
  cornerRef.current.style.transform = `translateY(${latestKnownScrollY}px)`;
};

const getOnScroll = elements => e => {
  latestKnownScrollY = e.target.scrollTop;
  latestKnownScrollX = e.target.scrollLeft;
  requestTick(elements);
};

const requestTick = elements => {
  if (!ticking) {
    requestAnimationFrame(update(elements));
  }
  ticking = true;
};

export default getOnScroll;
