import { useEffect } from "react";

const useElementScroll = ({ element }) => {
  const scrollLogic = () => {
    console.log("scrolling");
  };
  console.log('element: ', element);

  useEffect(() => {
    console.log('element: ', element);
    if (!element) return () => null;
    element.addEventListener("scroll", scrollLogic);
    return () => {
      element.removeEventListener("scroll", scrollLogic);
    };
  }, [element]);
};

export default useElementScroll;
