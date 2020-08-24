import _ from 'lodash';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Global } from '@emotion/core';

import styled from '@emotion/styled';

import ConfiguratorPage from 'containers/ConfiguratorPage';
import TestimonialPage from 'containers/TestimonialPage';
import NotFoundPage from 'containers/NotFoundPage';

import Header from 'components/collections/Header';
import Container from 'components/elements/Container';

import PagesManager from 'containers/PagesManager';
import GlobalAppManager from 'containers/GlobalManager';
import { Spinner } from '@chakra-ui/core';

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

// //////////////////////////////////////////////////////////////////////

const RouteTree = ({ items }) => (
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
);

// //////////////////////////////////////////////////////////////////////

function App() {
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
      <GlobalAppManager>
        {({ value: items, loading }) => {
          if (loading || _.isEmpty(items))
            return <Spinner alignSelf="center" m="auto"></Spinner>;
          return (
            <React.Fragment>
              <Header items={items}></Header>
              <Container>
                <RouteTree items={items}></RouteTree>
              </Container>
            </React.Fragment>
          );
        }}
      </GlobalAppManager>
      <PagesManager></PagesManager>
    </Wrapper>
  );
}

export default App;
