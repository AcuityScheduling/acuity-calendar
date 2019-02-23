import { CLASS_PREFIX } from '../constants';

const makeClass = (...classes) => {
  return classes.reduce((classNames, className) => {
    if (classNames !== '') {
      return `${classNames} ${CLASS_PREFIX}__${className}`;
    }
    return `${CLASS_PREFIX}__${className}`;
  }, '');
};

export default makeClass;
