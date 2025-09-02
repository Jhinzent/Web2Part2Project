import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authenticationActions from "../../actions/AuthenticationActions";

const mapStateToProps = (state) => {
  return state.rootReducer;
};

class UserSessionWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      password: "",
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    const { showLoginDialogAction } = this.props;
    showLoginDialogAction();
  }

  handleClose() {
    const { showCloseDialogAction } = this.props;
    showCloseDialogAction();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const {userID, password} = this.state
    const {authenticateUserAction} = this.props
    authenticateUserAction(userID.trim(), password)
  }

  render() {
    var showDialog = this.props.showLoginDialog;
    if (showDialog === undefined) {
      showDialog = false;
    }
    return (
      <div hidden>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo model
        </Button>

        <Modal id="LoginDialog" show={showDialog} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  id="LoginDialogUserIDText"
                  type="text"
                  placeholder="User ID"
                  name="userID"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="LoginDialogPasswordText"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                id="PerformLoginButton"
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>Passwort vergessen?</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showLoginDialogAction: authenticationActions.getShowLoginDialogAction,
      showCloseDialogAction: authenticationActions.getCloseLoginDialogAction,
      authenticateUserAction: authenticationActions.authenticateUser,
    },
    dispatch
  );

const ConnectUserSessionWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSessionWidget);

export default ConnectUserSessionWidget;
