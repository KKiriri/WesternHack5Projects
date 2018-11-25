import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FloatingActionButtonZoom from './components/Layout/reactbutton';

import { Provider } from 'react-redux';
import store from './store';

var history = require("history").createBrowserHistory;

const ButtonWithLink = () => (
  <Provider store={store}>
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={FloatingActionButtonZoom} />
            <Redirect to="/" />
          </div>
        </Router>
      </div>
      </Provider>
)

export default ButtonWithLink;
