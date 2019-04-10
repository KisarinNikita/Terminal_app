import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import { Provider } from "react-redux";
import store from "../store";
// import { checkToken } from "./actions/authActions";
// import { getInfo } from "./actions/stockActions";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Redirect from="/" exact to="/home" />
            </Switch>
          </div>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
