const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
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
    case "REFRESHED_TOKEN":
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state
      };
    case "LOGIN_SUCCESS":
    case "REGISTRATION_SUCCESS":
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        ...action.payload,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
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
        isAuthenticated: false
      };

    default:
      return state;
  }
}
