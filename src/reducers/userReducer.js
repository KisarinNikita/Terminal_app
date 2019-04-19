const initialState = {
  balance: 0,
  name: '',
  stocks: [],
  refresh: false,
  items: []
};

export default function info(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_STOCKS":
      return {
        ...state,
        balance: action.payload.balance,
        name: action.payload.name,
        stocks: action.payload.stocks
      };
    case "REFRESHED_TOKEN":
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state
      };
    case "GET_ALL_STOCKS":
      return {
        ...state,
        items: action.payload.items
      };
    case "GET_USER_STOCKS_FAIL":
      return {
        ...state,
        refresh: true
      };
    default:
      return state;
  }
}

