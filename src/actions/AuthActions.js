import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
import { AsyncStorage } from "react-native";
import RNRestart from "react-native-restart";

const onLoginSuccess = (dispatch, user, token) => {
  AsyncStorage.setItem("app_token", token);
  AsyncStorage.setItem("user", user);
  dispatch({ type: LOGIN_SUCCESS, user });
};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage });
};

const handleResponse = (dispatch, data, token) => {
  onLoginSuccess(dispatch, data, token);
};
export const loginUser = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_ATTEMPT });
    const user = {
      username: username,
      password: password,
      name: username
    };
    const token = "CiKzSPaRSZkkpnJKhPxLPDm2VLzKNvlG";
    handleResponse(dispatch, JSON.stringify(user), token);
  };
};
