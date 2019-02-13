import { makeClass } from "../../../utils";

const getEventContainerClass = className => {
  const eventClass = makeClass("step-grid__event");
  if (className) {
    return `${eventClass} ${className}`;
  }
  return eventClass;
};

export default getEventContainerClass;
