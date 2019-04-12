const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: { _id: null, score: 0 },
  name: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "CHECK_TOKEN":
      return {
        ...state
      };
    case "TOKEN_UP":
      return {
        ...state,
        isAuthenticated: true
      };
    case "TOKEN_DOWN":
      return {
        ...state,
        isAuthenticated: false
      };
    case "LOGIN_SUCCESS":
    case "REGISTRATION_SUCCESS":
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        name: action.payload.name
      };
    case "LOGIN_FAILED":
    case "REGISTRATION_FAILED":
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
}
