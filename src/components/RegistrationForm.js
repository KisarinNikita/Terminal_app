import React, {Component} from 'react';
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
            alert('ГОТОВО!')
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
            <div className="registrationForm">
                <label>Регистрация</label>
                <TextField
                    label="Логин"
                    value={this.state.name}
                    onChange={this.changeName}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    label="Пароль"
                    type="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />

                <Button variant="contained" color="primary" onClick={this.sendRegistration}>
                    Зарегистрироваться
                </Button>
            </div>
        );
    }
}

export default RegistrationForm;