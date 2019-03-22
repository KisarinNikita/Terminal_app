import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import AuthService from './AuthService';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.changeName = this.changeName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.sendRegistration = this.sendRegistration.bind(this);
        this.Auth = new AuthService();
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    sendRegistration() {
        if (this.validation()) {

          this.Auth.login(this.state.name, this.state.password)
            .then(res =>{
              console.log(res);
              // this.props.history.replace('/');
            })
            .catch(err =>{
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
            <div className="registration">
                <h2 className="main-title">Вход</h2>
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
        );
    }
}

export default LoginForm;
