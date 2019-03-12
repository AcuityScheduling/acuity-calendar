const isServer = () => {
  return !(typeof window !== 'undefined' && window.document);
};

const getScrollbarWidth = () => {
  if (isServer()) return 15;
  var outer = document.createElement('div');
  outer.style.overflowY = 'scroll';

  document.body.append(outer);

  const scrollbarWidth = outer.offsetWidth - outer.clientWidth;

  document.body.removeChild(outer);

  return scrollbarWidth;
};

export default getScrollbarWidth;
