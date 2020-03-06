import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Coronavirus from './pages/Coronavirus';
import SP500 from './pages/Stocks/SP500';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/coronavirus" component={Coronavirus} />
        <Route path="/stocks/sp500" component={SP500} />
      </Switch>
    </BrowserRouter>
  );
}
