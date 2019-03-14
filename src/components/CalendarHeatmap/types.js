import moment from 'moment';

const getCountType = () => {
  const validate = prop => {
    const isValid = Object.keys(prop).some(date => {
      if (!moment(new Date(date)).isValid()) return true;
      if (typeof prop[date] !== 'number') return true;
      return false;
    });
    return !isValid;
  };

  const required = (props, propName, componentName) => {
    const value = props[propName];

    if (value == null || typeof value !== 'object') {
      return new TypeError(
        `Invalid ${propName} prop: ${value} for ${propName} in ${componentName}`
      );
    }

    if (!validate(value)) {
      return new TypeError(
        `Invalid ${propName} prop: ${value} must have a date for 
        each key and a number for each value. e.g. {'2019-02-12': 5, '2019-02-13': 6}`
      );
    }

    return null;
  };

  const type = (props, propName, componentName) => {
    if (props[propName] == null) {
      return null;
    }

    return required(props, propName, componentName);
  };
  type.isRequired = required;
  return type;
};

export const COUNT_TYPE = getCountType();
