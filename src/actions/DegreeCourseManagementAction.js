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

export function getShowUpdateDialogAction(updateid, _id) {
  return {
    type: SHOW_UPDATE_DIALOG,
    updateID: updateid,
    updateid: _id,
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
export function getShowDeleteDialogAction(deleteID, _id) {
  return {
    type: SHOW_DELETE_DIALOG,
    deleteDegreeCourseID: deleteID,
    deleteid: _id,
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

export function createDegreeCourse(
  name,
  shortName,
  universityName,
  universityShortName,
  departmentName,
  departmentShortName
) {
  return (dispatch) => {
    create(
      name,
      shortName,
      universityName,
      universityShortName,
      departmentName,
      departmentShortName
    )
      .then(
        (createdDegreeCourse) => {
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

function create(
  name,
  shortName,
  universityName,
  universityShortName,
  departmentName,
  departmentShortName
) {
  let createDegreeCourse = {};

  if (name !== "") {
    createDegreeCourse["name"] = name;
  }

  if (shortName !== "") {
    createDegreeCourse["shortName"] = shortName;
  }

  if (universityName !== "") {
    createDegreeCourse["universityName"] = universityName;
  }

  if (universityShortName !== "") {
    createDegreeCourse["universityShortName"] = universityShortName;
  }

  if (departmentName !== "") {
    createDegreeCourse["departmentName"] = departmentName;
  }

  if (departmentShortName !== "") {
    createDegreeCourse["departmentShortName"] = departmentShortName;
  }

  const token = localStorage.getItem("token");
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(createDegreeCourse),
  };

  return fetch("https://localhost/api/DegreeCourses", reqOptions)
    .then(handleResponse)
    .then((DegreeCourseSession) => {
      return DegreeCourseSession;
    });
}

export function updateDegreeCourse(
  name,
  shortName,
  universityName,
  universityShortName,
  departmentName,
  departmentShortName,
  id
) {
  return (dispatch) => {
    update(
      name,
      shortName,
      universityName,
      universityShortName,
      departmentName,
      departmentShortName,
      id
    )
      .then(
        (createdDegreeCourse) => {
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

function update(
  name,
  shortName,
  universityName,
  universityShortName,
  departmentName,
  departmentShortName,
  id
) {
  const token = localStorage.getItem("token");
  let updateDegreeCourse = {};

  if (name !== "") {
    updateDegreeCourse["name"] = name;
  }

  if (shortName !== "") {
    updateDegreeCourse["shortName"] = shortName;
  }

  if (universityName !== "") {
    updateDegreeCourse["universityName"] = universityName;
  }

  if (universityShortName !== "") {
    updateDegreeCourse["universityShortName"] = universityShortName;
  }

  if (departmentName !== "") {
    updateDegreeCourse["departmentName"] = departmentName;
  }

  if (departmentShortName !== "") {
    updateDegreeCourse["departmentShortName"] = departmentShortName;
  }

  const reqOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(updateDegreeCourse),
  };

  return fetch(`https://localhost/api/degreeCourses/${id}`, reqOptions)
    .then(handleResponse)
    .then((DegreeCourseSession) => {
      return DegreeCourseSession;
    });
}

export function deleteDegreeCourse(deleteDegreeCourseID) {
  return (dispatch) => {
    deletedegreeCourse(deleteDegreeCourseID)
      .then(
        (deletedDegreeCourse) => {
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

function deletedegreeCourse(deleteDegreeCourseID) {
  const token = localStorage.getItem("token");
  const reqOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return fetch(
    "https://localhost/api/DegreeCourses/" + deleteDegreeCourseID,
    reqOptions
  )
    .then(handleResponse)
    .then((DegreeCourseSession) => {
      return DegreeCourseSession;
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
  console.error("Should logout DegreeCourse");
}
