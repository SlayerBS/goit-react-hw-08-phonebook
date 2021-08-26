import authActions from "./auth-actions";
import api from "../../services/api";

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await api.signUp(credentials);

    api.token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    console.log("error.message", error._message);
    dispatch(authActions.registerError(error));
    console.log("error.message", error._message);
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await api.logIn(credentials);

    api.token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await api.logOut();

    api.token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  api.token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await api.getCurrentUser();

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logIn, logOut, getCurrentUser };
