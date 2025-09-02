import * as userActions from "../actions/UserManagementAction";

const initialState = {
  createdUser: null,
  createUserDialogue: false,
  deleteUserDialogue: false,
  updateUserDialogue: false,
  deleteUserID: "",
  updateUserID: ""
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.SHOW_CREATE_DIALOG:
      return {
        ...state,
        createUserDialogue: true,
      };
    case userActions.CLOSE_CREATE_DIALOG:
      return {
        ...state,
        createUserDialogue: false,
      };
    case userActions.SHOW_CREATE_DIALOG_SUCCESS:
      return {
        ...state,
        createUserDialogue: false,
      };
    case userActions.SHOW_DELETE_DIALOG:
      return {
        ...state,
        deleteUserDialogue: true,
        deleteUserID: action.deleteUserID,
      };
    case userActions.CLOSE_DELETE_DIALOG:
      return {
        ...state,
        deleteUserDialogue: false,
      };
    case userActions.SHOW_DELETE_DIALOG_SUCCESS:
      return {
        ...state,
        deleteUserDialogue: false,
      };
      case userActions.SHOW_UPDATE_DIALOG:
      return {
        ...state,
        updateUserDialogue: true,
        updateUserID: action.updateID,
      };
    case userActions.CLOSE_UPDATE_DIALOG:
      return {
        ...state,
        updateUserDialogue: false,
      };
    case userActions.SHOW_UPDATE_DIALOG_SUCCESS:
      return {
        ...state,
        updateUserDialogue: true,
      };
    default:
      return {
        ...state,
      };
  }
}
export default userReducer;
