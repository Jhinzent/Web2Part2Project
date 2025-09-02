import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import * as userActions from "../../actions/UserManagementAction";
import { LinkContainer } from "react-router-bootstrap";

const mapStateToProps = (state) => {
  return state.userReducer;
};

class UserCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      password: "",
      firstName: "",
      lastName: "",
      isAdmin: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    const { showCreateDialogAction } = this.props;
    showCreateDialogAction();
  }

  handleClose() {
    const { closeCreateDialogAction } = this.props;
    closeCreateDialogAction();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userID, password, firstName, lastName, isAdmin } = this.state;
    const { createUserAction } = this.props;
    createUserAction(
      userID.trim(),
      password.trim(),
      firstName.trim(),
      lastName.trim(),
      isAdmin
    );
  }

  render() {
    var showDialog = this.props.createUserDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    return (
      <Modal
        id="UserManagementPageCreateComponent"
        show={showDialog}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateUserComponentEditUserID"
                placeholder="Enter UserID"
                name="userID"
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateUserComponentEditFirstName"
                placeholder="Enter First Name"
                name="firstName"
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateUserComponentEditLastName"
                placeholder="Enter Last Name"
                name="lastName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="„CreateUserComponentEditPassword"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
              <Form.Check
                type="switch"
                id="CreateUserComponentEditIsAdministrator"
                label="isAdministrator"
                onClick={() => {
                  this.setState({ isAdmin: !this.state.isAdmin });
                }}
              />
            </Form.Group>
            <LinkContainer to="/userManagement">
              <Button
                id="CreateUserComponentCreateUserButton"
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </LinkContainer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showCreateDialogAction: userActions.getShowCreateDialogAction,
      closeCreateDialogAction: userActions.getCloseCreateDialogAction,
      createUserAction: userActions.createUser,
    },
    dispatch
  );

const ConnectUserCreateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreateWidget);

export default ConnectUserCreateWidget;
