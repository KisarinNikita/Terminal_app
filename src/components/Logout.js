import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";

export class Logout extends Component {
  render() {
    return (
      <>
        <a onClick={this.props.logout}>Выйти</a>
      </>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
