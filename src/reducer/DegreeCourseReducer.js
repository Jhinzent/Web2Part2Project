import * as DegreeCourseActions from "../actions/DegreeCourseManagementAction";

const initialState = {
  createdDegreeCourse: null,
  createDegreeCourseDialogue: false,
  deleteDegreeCourseDialogue: false,
  updateDegreeCourseDialogue: false,
  createDegreeCourseAppDialogue: false,
  updateid: "",
  deleteid: "",
  deleteDegreeCourseID: "",
  updateDegreeCourseID: "",
  degreeCourseAppId: "",
  degreeCourseApp_id: ""
};

function degreeCourseReducer(state = initialState, action) {
  switch (action.type) {
    case DegreeCourseActions.SHOW_CREATE_DIALOG:
      return {
        ...state,
        createDegreeCourseDialogue: true,
      };
    case DegreeCourseActions.CLOSE_CREATE_DIALOG:
      return {
        ...state,
        createDegreeCourseDialogue: false,
      };
    case DegreeCourseActions.SHOW_CREATE_DIALOG_SUCCESS:
      return {
        ...state,
        createDegreeCourseDialogue: false,
      };
    case DegreeCourseActions.SHOW_DELETE_DIALOG:
      return {
        ...state,
        deleteDegreeCourseDialogue: true,
        deleteDegreeCourseID: action.deleteDegreeCourseID,
        deleteid: action.deleteid,
      };
    case DegreeCourseActions.CLOSE_DELETE_DIALOG:
      return {
        ...state,
        deleteDegreeCourseDialogue: false,
      };
    case DegreeCourseActions.SHOW_DELETE_DIALOG_SUCCESS:
      return {
        ...state,
        deleteDegreeCourseDialogue: false,
      };
    case DegreeCourseActions.SHOW_UPDATE_DIALOG:
      return {
        ...state,
        updateDegreeCourseDialogue: true,
        updateDegreeCourseID: action.updateID,
        updateid: action.updateid,
      };
    case DegreeCourseActions.CLOSE_UPDATE_DIALOG:
      return {
        ...state,
        updateDegreeCourseDialogue: false,
      };
    case DegreeCourseActions.SHOW_UPDATE_DIALOG_SUCCESS:
      return {
        ...state,
        updateDegreeCourseDialogue: true,
      };
    default:
      return {
        ...state,
      };
  }
}
export default degreeCourseReducer;


