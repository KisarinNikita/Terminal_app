import axios from "axios";

const header = { headers: { "Content-Type": "application/json" } };

export const register = (data) => dispatch => {
  axios.post(
      `https://secret-hamlet-78538.herokuapp.com/auth/signup`,
      JSON.stringify(data),
      header
    ).then(res => {
      res.data.name = data.login;
      dispatch({
        type: "REGISTRATION_SUCCESS",
        payload: res.data
      });

    }).catch(err => {
      dispatch({
        type: "REGISTRATION_FAILED"
      });
      const data = err.response.data;
      if (data.message) {
        let errors = [];
        for (let k in data.invalidFields) {
          errors.push(data.invalidFields[k].message)
        }
        alert(errors);
      }
    });
};

export const login = (data) => dispatch => {
  axios.post(
      `https://secret-hamlet-78538.herokuapp.com/auth/signin`,
      JSON.stringify(data),
      header
    ).then(res => {
      res.data.name = data.login;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
      window.location = '/';
    }).catch(err => {
      const data = err.response.data;
      dispatch({
        type: "LOGIN_FAILED"
      });
      if (data.message) {
        alert(data.message);
      }
    });
};

export const refreshToken = () => dispatch => {
  const refreshToken = localStorage.getItem("refreshToken");
  axios.post(
      `https://secret-hamlet-78538.herokuapp.com/auth/refresh`,
      JSON.stringify({"refreshToken": refreshToken}),
      header
    ).then(res => {
      dispatch({
        type: "REFRESHED_TOKEN",
        payload: res.data
      });
    }).catch(err => {
      const data = err.response.data;
      if (data.message) {
        alert(data.message);
      }
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
