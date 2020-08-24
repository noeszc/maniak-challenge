import _ from 'lodash/fp';

export const testRegex = _.curry(
  (value, regex) => value.toString().match(regex) !== null,
);

// eslint-disable-next-line no-console
export const trace = (msg) => _.tap((x) => console.log(msg, x));
