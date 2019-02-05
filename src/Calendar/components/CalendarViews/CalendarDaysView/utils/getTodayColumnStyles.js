import moment from "moment";

const styles = {
  background: "grey"
};

const getTodayColumnStyles = date => {
  if (date.isSame(moment(), "day")) {
    return styles;
  }
  return {};
};

export default getTodayColumnStyles;
