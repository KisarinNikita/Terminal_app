import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

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

export default Header;
