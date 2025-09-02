import * as DegreeCourseApplicationsActions from "../actions/DegreeCourseApplicationManagementAction";

const initialState = {
  createdDegreeCourseApplications: null,
  deleteDegreeCourseApplicationsDialogue: false,
  updateDegreeCourseApplicationsDialogue: false,
  updateid: "",
  deleteid: "",
  deleteDegreeCourseApplicationsID: "",
  updateDegreeCourseApplicationsID: "",
};

function degreeCourseApplicationsReducer(state = initialState, action) {
  switch (action.type) {
    case DegreeCourseApplicationsActions.SHOW_CREATE_APP_DIALOG:
      return {
        ...state,
        createDegreeCourseAppDialogue: true,
        degreeCourseAppId: action.id,
        degreeCourseApp_id: action._id,
      };
    case DegreeCourseApplicationsActions.CLOSE_CREATE_APP_DIALOG:
      return {
        ...state,
        createDegreeCourseAppDialogue: false,
      };
    case DegreeCourseApplicationsActions.SHOW_CREATE_APP_DIALOG_SUCCESS:
      return {
        ...state,
        createDegreeCourseApplicationsDialogue: false,
      };
    case DegreeCourseApplicationsActions.SHOW_DELETE_APP_DIALOG:
      return {
        ...state,
        deleteDegreeCourseApplicationsDialogue: true,
        deleteDegreeCourseApplicationsID:
          action.deleteDegreeCourseApplicationsID,
        deleteid: action.deleteid,
      };
    case DegreeCourseApplicationsActions.CLOSE_DELETE_APP_DIALOG:
      return {
        ...state,
        deleteDegreeCourseApplicationsDialogue: false,
      };
    case DegreeCourseApplicationsActions.SHOW_DELETE_APP_DIALOG_SUCCESS:
      return {
        ...state,
        deleteDegreeCourseApplicationsDialogue: false,
      };
    case DegreeCourseApplicationsActions.SHOW_UPDATE_APP_DIALOG:
      return {
        ...state,
        updateDegreeCourseApplicationsDialogue: true,
        updateDegreeCourseApplicationsID: action.updateID,
        updateid: action.updateid,
      };
    case DegreeCourseApplicationsActions.CLOSE_UPDATE_APP_DIALOG:
      return {
        ...state,
        updateDegreeCourseApplicationsDialogue: false,
      };
    case DegreeCourseApplicationsActions.SHOW_UPDATE_APP_DIALOG_SUCCESS:
      return {
        ...state,
        updateDegreeCourseApplicationsDialogue: true,
      };
    default:
      return {
        ...state,
      };
  }
}
export default degreeCourseApplicationsReducer;
