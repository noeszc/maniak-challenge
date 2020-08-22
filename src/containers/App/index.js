import _ from 'lodash';
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Global } from '@emotion/core';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import styled from '@emotion/styled';

import ConfiguratorPage from 'containers/ConfiguratorPage';
import TestimonialPage from 'containers/TestimonialPage';
import NotFoundPage from 'containers/NotFoundPage';

import Header from 'components/collections/Header';
import Container from 'components/elements/Container';

import { reducer, loadMenu } from './slice';
import saga from './saga';
import { makeSelectMenuItemsByLabel, makeSelectMenuLoading } from './selectors';
import { createStructuredSelector } from 'reselect';

// //////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => _.get(theme, 'colors.blue.50')};
`;

// //////////////////////////////////////////////////////////////////////

const getComponent = _.cond([
  [_.matches({ route: '/page-1' }), _.constant(TestimonialPage)],
  [_.matches({ route: '/page-2' }), _.constant(ConfiguratorPage)],
  [_.stubTrue, _.constant(NotFoundPage)],
]);

const appSelector = createStructuredSelector({
  loading: makeSelectMenuLoading,
  items: makeSelectMenuItemsByLabel,
});

// //////////////////////////////////////////////////////////////////////

function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const dispatch = useDispatch();
  const { loading, items } = useSelector(appSelector);

  useEffect(() => {
    dispatch(loadMenu());
  }, []);

  if (loading || _.isEmpty(items)) return null;

  return (
    <Wrapper>
      <Global
        styles={{
          '#app': {
            minHeight: '100%',
            minWidth: '100%',
          },
          'body.font--loaded': {
            fontFamily: `'Roboto', sans-serif;`,
          },
        }}
      ></Global>
      <Header items={items}></Header>
      <Container>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            render={() => (
              <Redirect to={_.get(items, 'Configurator.route')}></Redirect>
            )}
          ></Route>
          {_.map(items, ({ route, text, id }) => (
            <Route
              key={`page-route-${id}`}
              path={route}
              component={getComponent({ text, route })}
            ></Route>
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </Wrapper>
  );
}

export default App;
