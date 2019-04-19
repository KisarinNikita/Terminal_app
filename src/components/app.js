import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from './Nav';
import Home from './Home';
import Auth from './Auth';
import { Provider } from "react-redux";
import store from "../store";
import { connect } from "react-redux";
import { checkToken } from "../actions/authAction";

class App extends Component {

  componentDidMount() {
    store.dispatch(checkToken());
  }

  render() {
    let isAuth = store.getState().auth.isAuthenticated;
    return (
      <Provider store={store}>
        <React.Fragment>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Auth} />
              <Route path="/registration" component={Auth} />
              { isAuth ?
                <Redirect from="/" exact to="/home" /> :
                <Redirect from="/" exact to="/login" />
              }
            </Switch>
          </div>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
