import { makeClass } from "../../../utils";

const getEventContainerClass = className => {
  const eventClass = makeClass("times__event");
  if (className) {
    return `${eventClass} ${className}`;
  }
  return eventClass;
};

export default getEventContainerClass;
