import React, {Component} from 'react';
import { connect } from "react-redux";
import { register, login } from "../actions/authAction";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };

    location.pathname === '/registration' ? this.isRegistration = true : this.isRegistration = false;

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
      this.isRegistration ? this.props.register(data) : this.props.login(data);
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

    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/home'/>;
    }

    return (
      <div className="content">
        <div className="container">
          <div className="registration">
            <h2 className="main-title">{this.isRegistration ? 'Регистрация' : 'Вход'}</h2>
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
              {this.isRegistration ? 'Зарегистрироваться' : 'Войти'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {register, login}
)(Auth);

