/**
 * This whole file with the requestAnimationFrame is for performance. There seems
 * to be a real difference between using this code and just a normal event listener for
 * scroll. Not gonna lie I didn't really profile it, it was just perception at 6x slowdown
 * in the browser
 */

let latestKnownScrollX = 0;
let ticking = false;

const update = ({
  headerRef,
  timeColumnRef,
  cornerRef,
  timeIndicatorRef,
  stepLinesRef,
  wrapperRef,
  timeIndicatorWidth
}) => () => {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;

  headerRef.current.style.transform = `translateX(-${latestKnownScrollX}px)`;
  timeColumnRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;

  // Make sure the time indicator stays in the right place while scrolling horiz
  timeIndicatorRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;
  if (timeIndicatorWidth) {
    timeIndicatorRef.current.style.width = `${timeIndicatorWidth}px`;
  }
};

const getOnScroll = elements => e => {
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
