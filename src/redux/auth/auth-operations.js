import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

import api from "../../services/api";

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const { data } = await api.signUp(credentials);

    api.token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    console.log("error.message", error._message);
    dispatch(registerError(error));
    console.log("error.message", error._message);
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await api.logIn(credentials);

    api.token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await api.logOut();

    api.token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  api.token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await api.getCurrentUser();

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
