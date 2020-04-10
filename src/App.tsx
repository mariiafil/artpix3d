import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Maintenance } from './components/Maintenance/Maintenance';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Order } from './components/Order/Order';

const App: FC = () => (
  <>
    <Header />
    <div className="wrapper">
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/order"
          exact
          component={Order}
        />
        <Route
          path="*"
          exact
          component={Maintenance}
        />
      </Switch>

    </div>
  </>
);

export default App;
