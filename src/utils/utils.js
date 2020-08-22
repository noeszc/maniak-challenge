import fp from 'lodash/fp';

export const testRegex = fp.curry(
  (value, regex) => value.toString().match(regex) !== null,
);
