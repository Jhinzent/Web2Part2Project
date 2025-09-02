export const SHOW_CREATE_APP_DIALOG = "SHOW_CREATE_APP_DIALOG";
export const CLOSE_CREATE_APP_DIALOG = "CLOSE_CREATE_APP_DIALOG";
export const SHOW_CREATE_APP_DIALOG_SUCCESS = "SHOW_CREATE_APP_DIALOG_SUCCESS";
export const SHOW_CREATE_APP_DIALOG_ERROR = "SHOW_CREATE_APP_DIALOG_ERROR";
export const SHOW_UPDATE_APP_DIALOG = "SHOW_UPDATE_APP_DIALOG";
export const CLOSE_UPDATE_APP_DIALOG = "CLOSE_UPDATE_APP_DIALOG";
export const SHOW_UPDATE_APP_DIALOG_SUCCESS = "SHOW_UPDATE_APP_DIALOG_SUCCESS";
export const SHOW_UPDATE_APP_DIALOG_ERROR = "SHOW_UPDATE_APP_DIALOG_ERROR";
export const SHOW_DELETE_APP_DIALOG = "SHOW_DELETE_APP_DIALOG";
export const CLOSE_DELETE_APP_DIALOG = "CLOSE_DELETE_APP_DIALOG";
export const SHOW_DELETE_APP_DIALOG_SUCCESS = "SHOW_DELETE_APP_DIALOG_SUCCESS";
export const SHOW_DELETE_APP_DIALOG_ERROR = "SHOW_DELETE_APP_DIALOG_ERROR";
export const LOGOUT_APP = "LOGOUT_APP";

export function getShowCreateAppDialogAction(id, _id) {
  return {
    type: SHOW_CREATE_APP_DIALOG,
    id: id,
    _id: _id,
  };
}

export function getCloseCreateAppDialogAction() {
  return {
    type: CLOSE_CREATE_APP_DIALOG,
  };
}

export function getShowCreateAppDialogActionSuccess() {
  return {
    type: SHOW_CREATE_APP_DIALOG_SUCCESS,
  };
}

export function getShowCreateAppDialogActionError() {
  return {
    type: SHOW_CREATE_APP_DIALOG_ERROR,
  };
}

export function getShowUpdateAppDialogAction(updateid, _id) {
  return {
    type: SHOW_UPDATE_APP_DIALOG,
    updateID: updateid,
    updateid: _id,
  };
}

export function getCloseUpdateAppDialogAction() {
  return {
    type: CLOSE_UPDATE_APP_DIALOG,
  };
}

export function getShowUpdateAppDialogActionSuccess() {
  return {
    type: SHOW_UPDATE_APP_DIALOG_SUCCESS,
  };
}

export function getShowUpdateAppDialogActionError() {
  return {
    type: SHOW_UPDATE_APP_DIALOG_ERROR,
  };
}
export function getShowDeleteAppDialogAction(deleteID, _id) {
  return {
    type: SHOW_DELETE_APP_DIALOG,
    deleteDegreeCourseApplicationID: deleteID,
    deleteid: _id,
  };
}

export function getCloseDeleteAppDialogAction() {
  return {
    type: CLOSE_DELETE_APP_DIALOG,
  };
}

export function getShowDeleteAppDialogActionSuccess() {
  return {
    type: SHOW_DELETE_APP_DIALOG_SUCCESS,
  };
}

export function getShowDeleteAppDialogActionError() {
  return {
    type: SHOW_DELETE_APP_DIALOG_ERROR,
  };
}

export function createDegreeCourseApplication(
  applicantUserID,
  degreeCourseID,
  targetPeriodYear,
  targetPeriodShortName
) {
  return (dispatch) => {
    createApp(
      applicantUserID,
      degreeCourseID,
      targetPeriodYear,
      targetPeriodShortName
    )
      .then(
        (createdDegreeCourse) => {
          const action = getShowCreateAppDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowCreateAppDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowCreateAppDialogActionError(error));
      });
  };
}

function createApp(
  applicantUserID,
  degreeCourseID,
  targetPeriodYear,
  targetPeriodShortName
) {
  let createDegreeCourseApp = {};

  if (applicantUserID !== "") {
    createDegreeCourseApp["applicantUserID"] = applicantUserID;
  }

  if (degreeCourseID !== "") {
    createDegreeCourseApp["degreeCourseID"] = degreeCourseID;
  }

  if (targetPeriodYear !== "") {
    createDegreeCourseApp["targetPeriodYear"] = targetPeriodYear;
  }

  if (targetPeriodShortName !== "") {
    createDegreeCourseApp["targetPeriodShortName"] = targetPeriodShortName;
  }

  const token = localStorage.getItem("token");
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(createDegreeCourseApp),
  };

  console.log(createDegreeCourseApp);

  return fetch("https://localhost/api/degreeCourseApplications", reqOptions)
    .then(handleResponse)
    .then((DegreeCourseSession) => {
      return DegreeCourseSession;
    });
}

export function updateDegreeCourseApplication(
  targetPeriodYear,
  targetPeriodShortName,
  id
) {
  return (dispatch) => {
    update(targetPeriodYear, targetPeriodShortName, id)
      .then(
        (createdDegreeCourseApplication) => {
          const action = getShowUpdateAppDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowUpdateAppDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowUpdateAppDialogActionError(error));
      });
  };
}

function update(targetPeriodYear, targetPeriodShortName, id) {
  const token = localStorage.getItem("token");
  let updateDegreeCourseApplication = {};

  if (targetPeriodYear !== "") {
    updateDegreeCourseApplication["targetPeriodYear"] = targetPeriodYear;
  }

  if (targetPeriodShortName !== "") {
    updateDegreeCourseApplication["targetPeriodShortName"] =
      targetPeriodShortName;
  }

  const reqOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(updateDegreeCourseApplication),
  };

  return fetch(
    `https://localhost/api/degreeCourseApplications/${id}`,
    reqOptions
  )
    .then(handleResponse)
    .then((DegreeCourseApplicationSession) => {
      return DegreeCourseApplicationSession;
    });
}

export function deleteDegreeCourseApplication(deleteDegreeCourseApplicationID) {
  return (dispatch) => {
    deletedegreeCourseApplication(deleteDegreeCourseApplicationID)
      .then(
        (deletedDegreeCourseApplication) => {
          const action = getShowDeleteAppDialogActionSuccess();
          dispatch(action);
        },
        (error) => {
          dispatch(getShowDeleteAppDialogActionError(error));
        }
      )
      .catch((error) => {
        dispatch(getShowDeleteAppDialogActionError(error));
      });
  };
}

function deletedegreeCourseApplication(deleteDegreeCourseApplicationID) {
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
    `https://localhost/api/DegreeCourseApplications/${deleteDegreeCourseApplicationID}`,
    reqOptions
  )
    .then(handleResponse)
    .then((DegreeCourseApplicationSession) => {
      return DegreeCourseApplicationSession;
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
  console.error("Should logout DegreeCourseApplication");
}
