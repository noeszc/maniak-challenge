import _ from 'lodash/fp';
import { useSetState } from 'react-use';
import { getStimatedSavings, getNewValues } from './helpers';

// getInitialState :: Object -> Object
const getInitialState = (defaultValues) => ({
  ...defaultValues,
  ...getStimatedSavings(defaultValues),
});

// createNextState :: Object -> a -> String -> a -> Object
const createNextState = _.curry((state, defaultValues, name) =>
  _.compose(
    getNewValues(state, defaultValues),
    _.fromPairs,
    Array.of,
    _.concat([name]),
    Array.of,
  ),
);

// updateValues :: (a -> a) -> a -> a
const updateValues = (setter) => _.compose(_.tap(setter), _.defaultTo({}));

function useHandlers(props = {}) {
  // defaultValues :: Object
  const defaultValues = {
    ingredientSpending: _.defaultTo(25, props.ingredientSpending),
    fullTimeEmployees: _.defaultTo(4, props.fullTimeEmployees),
  };
  /*
    state :: Object
    setState :: (a -> undefined)
  */
  const [state, setState] = useSetState(getInitialState(defaultValues));

  // handleChange :: String -> a -> Object
  const handleChange = createNextState(state, defaultValues);

  // handleIngridients :: a -> Object
  const handleIngridients = _.compose(
    updateValues(setState),
    handleChange('ingredientSpending'),
  );

  // handleEmployees :: a -> Object
  const handleEmployees = _.compose(
    updateValues(setState),
    handleChange('fullTimeEmployees'),
  );

  // nextProps :: Object
  const nextProps = Object.assign({}, props, state, {
    handleIngridients,
    handleEmployees,
  });

  return nextProps;
}

export default useHandlers;
