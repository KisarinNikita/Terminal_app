import axios from "axios";

export const getUserStocks = () => (dispatch, getState) => {
  const token = getState().auth.token;
  axios.get(`https://secret-hamlet-78538.herokuapp.com/account/info`,
      { headers: { Authorization: token } }
    ).then(res => {
      dispatch({
        type: "GET_USER_STOCKS",
        payload: res.data
      });
    }).catch(err => {
      dispatch({ type: "GET_USER_STOCKS_FAIL" });
    });
};

export const getAllStocks = () => (dispatch, getState) => {
  const token = getState().auth.token;
  axios.get(`https://stocks-mocks.herokuapp.com/api/stocks`,
    { headers: { Authorization: token } })
    .then(res => {
      dispatch({
        type: "GET_ALL_STOCKS",
        payload: res.data
      });
    }).catch(err => {
    dispatch({ type: "GET_USER_STOCKS_FAIL" });
  });
};

