import React, { Component } from 'react';
import { connect } from "react-redux";
import Logout from './Logout';

class Nav extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <>
        <a href="/">Главная</a>
        <Logout/>
      </>
    );

    const notAuthLinks = (
      <>
        <a href="/registration">Регистрация</a>
        <a href="/login">Вход</a>
      </>
    );

    return (
      <header>
        <div className="container main-menu">
          {isAuthenticated ? authLinks : notAuthLinks}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Nav);

