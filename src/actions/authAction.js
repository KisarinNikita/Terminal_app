import axios from "axios";

export const register = (data) => dispatch => {
  const header = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .post(
      `https://secret-hamlet-78538.herokuapp.com/auth/signup`,
      JSON.stringify(data),
      header
    )
    .then(res => {
      res.data.name = data.login;
      dispatch({
        type: "REGISTRATION_SUCCESS",
        payload: res.data
      });
      window.location = '/';
    })
    .catch(err => {
      dispatch({
        type: "REGISTRATION_FAILED"
      });
      console.log(err);
    });
};

export const login = (data) => dispatch => {
  const header = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  axios
    .post(
      `https://secret-hamlet-78538.herokuapp.com/auth/signin`,
      JSON.stringify(data),
      header
    )
    .then(res => {
      res.data.name = data.login;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
      window.location = '/';
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_FAILED"
      });
      console.log(err);
    });
};

export const logout = () => dispatch => {
  dispatch({
    type: "LOGOUT_SUCCESS",
  });
  window.location = '/login';
};

export const checkToken = () => dispatch => {
  dispatch({ type: "CHECK_TOKEN" });
  const token = localStorage.getItem("token");
  token ? dispatch({ type: "TOKEN_UP" }) : dispatch({ type: "TOKEN_DOWN" });
};
