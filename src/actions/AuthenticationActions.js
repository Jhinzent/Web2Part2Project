import { Buffer } from "buffer";
export const SHOW_LOGIN_DIALOG = "SHOW_LOGIN_DIALOG";
export const CLOSE_LOGIN_DIALOG = "CLOSE_LOGIN_DIALOG";
export const AUTHENTICATION_PENDING = "AUTHENTICATION_PENDING";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const AUTHENTICATION_LOGOUT = "AUTHENTICATION_LOGOUT";
export const SHOW_USERS = "SHOW_USERS";

export function getShowLoginDialogAction() {
  return {
    type: SHOW_LOGIN_DIALOG,
  };
}

export function getCloseLoginDialogAction() {
  return {
    type: CLOSE_LOGIN_DIALOG,
  };
}

export function getAuthenticateUserPedningAction() {
  return {
    type: AUTHENTICATION_PENDING,
  };
}

export function getAuthenticateSuccessAction(userSession) {
  return {
    type: AUTHENTICATION_SUCCESS,
    user: userSession.user,
    accessToken: userSession.accessToken,
  };
}

export function getAuthenticateErrorAction(error) {
  return {
    type: AUTHENTICATION_ERROR,
    error: error,
  };
}

export function logOutAction() {
  return {
    type: AUTHENTICATION_LOGOUT,
  };
}

/*export function getAllUsers(allusers) {
  return {
    type: SHOW_USERS,
    users: allusers,
  };
}*/

export function authenticateUser(userID, password) {
  return (dispatch) => {
    dispatch(getAuthenticateUserPedningAction());
    login(userID, password)
      .then(
        (userSession) => {
          const action = getAuthenticateSuccessAction(userSession);
          dispatch(action);
        },
        (error) => {
          dispatch(getAuthenticateErrorAction(error));
        }
      )
      .catch((error) => {
        dispatch(getAuthenticateErrorAction(error));
      });
  };
}


function login(userID, password) {
  let input = Buffer.from(userID + ":" + password).toString("base64");
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + input,
    },
  };

  return fetch("https://localhost/api/authenticate/", reqOptions)
    .then(handleResponse)
    .then((userSession) => {
      return userSession;
    });
}


function handleResponse(response) {
  const authorizationHeader = response.headers.get("Authorization");

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    let token;
    if (authorizationHeader) {
      token = authorizationHeader.split(" ")[1];
    }
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    } else {
      let userSession = {
        user: data,
        accessToken: token,
      };
      localStorage.setItem("token", userSession.accessToken)
      return userSession;
    }
  });
}

function logout() {
  console.error("Should logout user");
}
