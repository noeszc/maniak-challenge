import _ from 'lodash';

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
