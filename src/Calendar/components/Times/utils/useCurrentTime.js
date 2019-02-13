import { useState, useEffect } from "react";
import moment from "moment";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentTime(moment()), 1000 * 60);
    return () => {
      clearTimeout(timeout);
    };
  });

  return currentTime;
};

export default useCurrentTime;
