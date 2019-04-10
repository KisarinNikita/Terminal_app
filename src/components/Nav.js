import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header>
        <div className=" container main-menu">
          <a href="/">Главная</a>
          <a href="/registration">Регистрация</a>
          <a href="/login">Авторизация</a>
        </div>
      </header>
    );
  }
}

export default Nav;


