export const SHOW_CREATE_DIALOG = "SHOW_CREATE_DIALOG";
export const CLOSE_CREATE_DIALOG = "CLOSE_CREATE_DIALOG";
export const SHOW_CREATE_DIALOG_SUCCESS = "SHOW_CREATE_DIALOG_SUCCESS";
export const SHOW_CREATE_DIALOG_ERROR = "SHOW_CREATE_DIALOG_ERROR";
export const SHOW_UPDATE_DIALOG = "SHOW_UPDATE_DIALOG";
export const CLOSE_UPDATE_DIALOG = "CLOSE_UPDATE_DIALOG";
export const SHOW_UPDATE_DIALOG_SUCCESS = "SHOW_UPDATE_DIALOG_SUCCESS";
export const SHOW_UPDATE_DIALOG_ERROR = "SHOW_UPDATE_DIALOG_ERROR";
export const SHOW_DELETE_DIALOG = "SHOW_DELETE_DIALOG";
export const CLOSE_DELETE_DIALOG = "CLOSE_DELETE_DIALOG";
export const SHOW_DELETE_DIALOG_SUCCESS = "SHOW_DELETE_DIALOG_SUCCESS";
export const SHOW_DELETE_DIALOG_ERROR = "SHOW_DELETE_DIALOG_ERROR";
export const LOGOUT = "LOGOUT";

export function getShowCreateDialogAction() {
  return {
    type: SHOW_CREATE_DIALOG,
  };
}

export function getCloseCreateDialogAction() {
  return {
    type: CLOSE_CREATE_DIALOG,
  };
}

export function getShowCreateDialogActionSuccess() {
  return {
    type: SHOW_CREATE_DIALOG_SUCCESS,
  };
}

export function getShowCreateDialogActionError() {
  return {
    type: SHOW_CREATE_DIALOG_ERROR,
  };
}

export function getShowUpdateDialogAction(updateID) {
  return {
    type: SHOW_UPDATE_DIALOG,
    updateID: updateID,
  };
}

export function getCloseUpdateDialogAction() {
  return {
    type: CLOSE_UPDATE_DIALOG,
  };
}

export function getShowUpdateDialogActionSuccess() {
  return {
    type: SHOW_UPDATE_DIALOG_SUCCESS,
  };
}

export function getShowUpdateDialogActionError() {
  return {
    type: SHOW_UPDATE_DIALOG_ERROR,
  };
}
export function getShowDeleteDialogAction(deleteID) {
  return {
    type: SHOW_DELETE_DIALOG,
    deleteUserID: deleteID,
  };
}

export function getCloseDeleteDialogAction() {
  return {
    type: CLOSE_DELETE_DIALOG,
  };
}

export function getShowDeleteDialogActionSuccess() {
  return {
    type: SHOW_DELETE_DIALOG_SUCCESS,
  };
}

export function getShowDeleteDialogActionError() {
  return {
    type: SHOW_DELETE_DIALOG_ERROR,
  };
}

export function createUser(userID, password, firstName, lastName, isAdmin) {
  return (dispatch) => {
    create(userID, password, firstName, lastName, isAdmin)
      .then(
        (createdUser) => {
          const action = getShowCreateDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowCreateDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowCreateDialogActionError(error));
      });
  };
}

function create(userID, password, firstName, lastName, isAdmin) {
  const token = localStorage.getItem("token");
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      userID: userID,
      firstName: firstName,
      lastName: lastName,
      password: password,
      isAdministrator: isAdmin,
    }),
  };

  return fetch("https://localhost/api/users", reqOptions)
    .then(handleResponse)
    .then((userSession) => {
      return userSession;
    });
}

export function updateUser(
  userID,
  password,
  firstName,
  lastName,
  isAdmin,
  User
) {
  return (dispatch) => {
    update(userID, password, firstName, lastName, isAdmin, User)
      .then(
        (createdUser) => {
          const action = getShowUpdateDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowUpdateDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowUpdateDialogActionError(error));
      });
  };
}

function update(userID, password, firstName, lastName, isAdmin, User) {
  const token = localStorage.getItem("token");
  let updateUser = {};

  if (userID !== "") {
    updateUser["userID"] = userID;
  }

  if (password !== "") {
    updateUser["password"] = password;
  }

  if (firstName !== "") {
    updateUser["firstName"] = firstName;
  }

  if (lastName !== "") {
    updateUser["lastName"] = lastName;
  }

  const reqOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(updateUser),
  };

  return fetch(`https://localhost/api/users/${User}`, reqOptions)
    .then(handleResponse)
    .then((userSession) => {
      return userSession;
    });
}

export function deleteUser(deleteUserID) {
  return (dispatch) => {
    deleteuser(deleteUserID)
      .then(
        (deletedUser) => {
          const action = getShowDeleteDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowDeleteDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowDeleteDialogActionError(error));
      });
  };
}

function deleteuser(deleteUserID) {
  const token = localStorage.getItem("token");
  const reqOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      userID: deleteUserID,
    }),
  };

  return fetch("https://localhost/api/users/" + deleteUserID, reqOptions)
    .then(handleResponse)
    .then((userSession) => {
      return userSession;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    } else {
      return;
    }
  });
}

function logout() {
  console.error("Should logout user");
}
