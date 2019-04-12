const initialState = {
  balance: 0,
  name: '',
  stocks: []
};

export default function info(state = initialState, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        balance: action.payload.balance,
        name: action.payload.name,
        stocks: action.payload.stocks
      };
    case "GET_INFO_FAIL":
      return {
        ...state
      };
    default:
      return state;
  }
}
