import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

import GlobalStyle from '../../global-styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle></GlobalStyle>
    </Wrapper>
  );
}

export default App;
