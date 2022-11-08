import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../Header';
import './app.scss';
import { Home } from '../../routes/Home';
import { Details } from '../../routes/Details';
import { Specs } from '../../routes/Specs';
import { Footer } from '../Footer';
import { useGetGenres } from '../../hooks/useGetGenres';
import { useScrollTop } from '../../hooks/useScrollTop';

export const App = () => {
  useGetGenres();
  useScrollTop();

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/specs">
          <Specs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
