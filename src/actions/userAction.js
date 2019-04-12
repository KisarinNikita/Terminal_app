import axios from "axios";

export const getInfo = () => (dispatch, getState) => {
  const token = getState().auth.token;
  axios
    .get(`https://stocks-mocks.herokuapp.com/api/account/info`, {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      dispatch({
        type: "GET_INFO",
        payload: res.data
      });
    })
    .catch(err => {
      console.log('ошибка');
      dispatch({ type: "GET_INFO_FAIL" });
    });
};


// export const getStocks = () => (dispatch, getState) => {
//   // Headers
//
//   const token = getState().auth.token;
//   axios
//     .get(`${proxy}https://stockstore.herokuapp.com/api/stocks?search=${1}`, {
//       headers: {
//         Authorization: token
//       }
//     })
//     .then(res => {
//       console.log(res.data);
//
//       dispatch({
//         type: GET_STOCK_LIST,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log('cant get stock list');
//       dispatch({ type: GET_STOCK_LIST_FAILED });
//       dispatch(returnErrors(err.response.data, err.response.status));
//     });
// };
