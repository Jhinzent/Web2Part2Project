import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import * as userActions from "../../actions/UserManagementAction";

const mapStateToProps = (state) => {
  return state.userReducer;
};

class UserUpdateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      firstName: props.firstName,
      lastName: props.lastName,
      userID: props.userID,
      isAdministrator: props.isAdministrator,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    const { showUpdateDialogAction } = this.props;
    showUpdateDialogAction();
  }

  handleClose() {
    const { closeUpdateDialogAction } = this.props;
    closeUpdateDialogAction();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userID, firstName, lastName, isAdministrator } = this.props;
    const { password } = this.state;

    const { updateUserAction } = this.props;
    updateUserAction(
      userID.trim(),
      password.trim(),
      firstName.trim(),
      lastName.trim(),
      isAdministrator,
      this.props.updateUserID
    );

    const { closeUpdateDialogAction } = this.props;
    closeUpdateDialogAction();
    alert("Successfully updated the user: " + this.props.updateUserID);
  }

  render() {
    var showDialog = this.props.updateUserDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }

    const { isAdministrator } = this.props;
    var adminStatus = false;
    if(isAdministrator === true) {
      adminStatus = true;
    }
    else adminStatus = false;

    return (
      <Modal id="UserManagementPageEditComponent" show={showDialog}>
        <Modal.Header>
          <Modal.Title>
            You are editing the user: {this.props.updateUserID}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditUserComponentEditUserID"
                placeholder="Enter UserID"
                name="userID"
                value={this.props.userID}
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="EditUserComponentEditFirstName"
                placeholder="Enter First Name"
                name="firstName"
                value={this.props.firstName}
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="„EditUserComponentEditLastName"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.props.lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditUserComponentEditPassword"
                type="password"
                placeholder="Password"
                name="password"
                value={this.props.password}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Check
              type="switch"
              id="EditUserComponentEditIsAdministrator"
              label="isAdministrator"
              value={adminStatus}
              onClick={() => {
                this.setState({ isAdministrator: !this.state.isAdministrator });
              }}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
              id="EditUserComponentSaveUserButton"
            >
              Update
            </Button>
            <Button
              className="Userlist"
              variant="secondary"
              id="OpenUserManagementPageListComponentButton"
              onClick={this.handleClose}
            >
              User-List
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showUpdateDialogAction: userActions.getShowUpdateDialogAction,
      closeUpdateDialogAction: userActions.getCloseUpdateDialogAction,
      updateUserAction: userActions.updateUser,
    },
    dispatch
  );

const ConnectUserUpdateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdateWidget);

export default ConnectUserUpdateWidget;
