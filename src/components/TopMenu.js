import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserSessionWidget from "../components/Widgets/UserSessionWidget";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authenticationActions from "../actions/AuthenticationActions";
import LoginButton from "../components/Buttons/LoginButton";
import { Buffer } from "buffer";

const TopMenu = ({ user, accessToken, logOutAction }) => {
  useEffect(() => {}, []);

  const logout = () => {
    logOutAction();
  };

  let Topmenu;
  let Homebutton;

  if (user) {
    Homebutton = (
      <LinkContainer to="/" id="OpenStartPageButton">
        <Navbar.Brand className="Homebutton">Home</Navbar.Brand>
      </LinkContainer>
    );
    Topmenu = (
      <div>
        <LinkContainer
          to="/"
          className="logout"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Button onClick={logout}>Logout</Button>
        </LinkContainer>
      </div>
    );

    const pl = accessToken.split(".")[1];
    const encodepl = Buffer.from(pl, "base64").toString("ascii");
    const decoded = JSON.parse(encodepl);
    const isAdministrator = decoded.isAdministrator;

    if (isAdministrator === true) {
      Topmenu = (
        <div>
          <LinkContainer
            to="/degreeCourseApplicationManagement"
            id="OpenDegreeCourseApplicationManagementPageButton"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button>DegreeCourseApplicationManagement</Button>
          </LinkContainer>
          <LinkContainer
            to="/degreeCourseManagement"
            id="OpenDegreeCourseManagementPageButton"
            className="OpenDegreeCourseManagementPageButton"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button>DegreeCourseManagement</Button>
          </LinkContainer>
          <LinkContainer
            to="/userManagement"
            id="OpenUserManagementPageButton"
            className="OpenUserManagementPageButton"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button>UserManagement</Button>
          </LinkContainer>
          <LinkContainer
            to="/"
            className="logout"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button onClick={logout}>Logout</Button>
          </LinkContainer>
        </div>
      );
    } else {
      Topmenu = (
        <div>
          <LinkContainer
            to="/degreeCourseApplicationManagement"
            id="OpenDegreeCourseApplicationManagementPageButton"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button>DegreeCourseApplicationManagement</Button>
          </LinkContainer>
          <LinkContainer
            to="/degreeCourseManagement"
            id="OpenDegreeCourseManagementPageButton"
            className="OpenDegreeCourseManagementPageButton"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button>DegreeCourseManagement</Button>
          </LinkContainer>
          <LinkContainer
            to="/"
            className="logout"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Button onClick={logout}>Logout</Button>
          </LinkContainer>
        </div>
      );
    }
  } else {
    Topmenu = <LoginButton className="login" id="OpenLoginDialogButton" />;
  }

  return (
    <Navbar bg="dark" variant="dark">
      {Homebutton}
      <Nav className="me-auto"></Nav>
      <div>{Topmenu}</div>
      <UserSessionWidget />
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  user: state.rootReducer.user,
  accessToken: state.rootReducer.accessToken,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOutAction: authenticationActions.logOutAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
