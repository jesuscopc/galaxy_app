import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Coordinates from './Coordinates';
import Spacecraft from './Spacecraft';
import Satellites from './Satellites';
import Header from '../components/Header';

const Routes = (): React.ReactElement => (
  <Router basename="/">
    <Header />
    <Switch>
      <Route exact path="/" component={Coordinates} />
      <Route exact path="/spacecraft" component={Spacecraft} />
      <Route path="/satellites" component={Satellites} />
    </Switch>
  </Router>
);
export default Routes;
