import _ from 'lodash';
import { testRegex } from 'utils/utils';

export const getfoodCostSaving = (a, n = 0.3) => _.multiply(a, n);

export const getAnnualSaving = (a, b = 0, n = 1337) =>
  _.add(_.multiply(a * n), b);

export const getValues = (source, target) =>
  _.flowRight((keys) => _.pick(source, keys), _.keys)(target);

export const getNewValues = _.curry((state, target, change) => {
  const values = getValues(state, target);
  const newValues = { ...values, ...change };

  if (_.isEqual(values, newValues)) return;

  return { ...newValues, ...getStimatedSavings(newValues) };
});

export const getStimatedSavings = ({
  ingredientSpending,
  fullTimeEmployees,
}) => {
  const foodCostSaving = getfoodCostSaving(ingredientSpending);
  const annualSaving = getAnnualSaving(fullTimeEmployees, foodCostSaving);

  return {
    foodCostSaving,
    annualSaving,
  };
};

const DOMAIN_REGEX = /([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+)/;

export const splitWordByDomain = (str) =>
  str.split(DOMAIN_REGEX).filter((s) => s !== '');
