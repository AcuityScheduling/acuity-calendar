const isServer = () => {
  return !(typeof window !== "undefined" && window.document);
};

// https://stackoverflow.com/questions/8079187/how-to-calculate-the-width-of-the-scroll-bar
const getScrollbarWidth = () => {
  if (isServer()) return 15;
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

export default getScrollbarWidth;
