import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.changeName = this.changeName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.sendRegistration = this.sendRegistration.bind(this);
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    sendRegistration() {
        if (this.validation()) {
          const data = {
            login: this.state.name,
            password: this.state.password
          };

          axios.post(`https://secret-hamlet-78538.herokuapp.com/auth/signup`,
            JSON.stringify(data),
            { headers: {
              'Content-Type': 'application/json',
            }})
            .then(res => {
                if (!res.data.code) {
                    alert('Вы успешно зарегистрированы! Ваш accessToken - ' + res.data.accessToken);
                    window.location.href = "/login";
                  console.log(res.data);
                } else {
                    alert('Ошибка:' + res.message);
                    location.reload();
                }
            }).catch(err =>{
                alert(err);
          })
        }

    }

    validation() {
        this.errors = [];

        if (this.state.name === '') this.errors.push('Введите логин\n');

        if (this.state.password === '') this.errors.push('Введите пароль\n');

        if (this.errors.length) {
            alert(this.errors.join(''));
            return false;
        }

        return true;
    }

    render() {

        return (
          <div className="content">
            <div className="container">
                <div className="registration">
                    <h2 className="main-title">Регистрация</h2>
                    <TextField
                        label="Логин"
                        value={this.state.name}
                        onChange={this.changeName}
                        margin="normal"
                        variant="outlined"
                        className="registration__input"

                    />

                    <TextField
                        label="Пароль"
                        type="password"
                        value={this.state.password}
                        onChange={this.changePassword}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        className="registration__input"
                    />

                    <Button variant="contained"
                            color="primary"
                            onClick={this.sendRegistration}
                            className="registration__button">
                        Зарегистрироваться
                    </Button>
                </div>
            </div>
          </div>
        );
    }
}

export default RegistrationForm;
