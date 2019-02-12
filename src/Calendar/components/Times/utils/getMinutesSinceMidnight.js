const getMinutesSinceMidnight = start => {
  const hour = start.get("hour");
  const minute = start.get("minute");
  return hour * 60 + minute;
};

export default getMinutesSinceMidnight;
