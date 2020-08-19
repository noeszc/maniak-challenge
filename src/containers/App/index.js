import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
