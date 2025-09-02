import * as authenticationActions from "../actions/AuthenticationActions";

const initialState = {
  user: null,
  loginPending: false,
  showLoginDialog: false,
  accessToken: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case authenticationActions.SHOW_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: true,
      };
    case authenticationActions.CLOSE_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: false,
      };
    case authenticationActions.AUTHENTICATION_PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case authenticationActions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        showLoginDialog: false,
        loginPending: false,
        user: action.user,
        accessToken: action.accessToken,
      };
    case authenticationActions.AUTHENTICATION_ERROR:
      return {
        ...state,
        loginPending: false,
        error: "Authentication failed",
      };
    case authenticationActions.AUTHENTICATION_LOGOUT:
      return {
        showLoginDialog: false,
        user: null,
        accessToken: null,
      };
    /*case authenticationActions.SHOW_USERS:
      return {
        ...state,
        users: action.users,
      };*/
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
