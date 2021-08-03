import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Game from 'pages/Game';
import Ranking from 'pages/Ranking';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </Router>
  );
}

export default Routes;
