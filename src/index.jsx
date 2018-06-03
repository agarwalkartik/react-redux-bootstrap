import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import store from './configure.store';
import FavouriteMovie from './components/FavouriteMovie';

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/favourite-movie" component={FavouriteMovie} />
        <Redirect to="/favourite-movie" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
