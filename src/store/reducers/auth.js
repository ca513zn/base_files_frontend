import api from "../../apiHelper";

const defaultState = {
  loggedIn: false,
  token: null,
  user: null
};

export const setLogin = (token, user) => {
  return {
    type: "SET_LOGIN",
    token: token,
    user: user,
  };
};
export const denyLogin = () => {
  return {
    type: "DENY_LOGIN",
  };
};

export const login = (params) => {
  return async (dispatch) => {
    try {
      const response = await api.post("auth/login", params);
      console.log(response.data)
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        dispatch(setLogin(response.data.token, response.data.user));
      } else {
        dispatch(denyLogin());
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        loggedIn: true,
        token: action.token,
        user: action.user
      };
    case "DENY_LOGIN":
      return state;
    default:
      return state;
  }
};

export default reducer;
