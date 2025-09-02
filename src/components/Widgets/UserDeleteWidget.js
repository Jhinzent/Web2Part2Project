import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/UserManagementAction";

const mapStateToProps = (state) => {
  return state.userReducer;
};

class UserDeleteWidget extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    const { showDeleteDialogAction } = this.props;
    showDeleteDialogAction();
  }

  handleClose() {
    const { closeDeleteDialogAction } = this.props;
    closeDeleteDialogAction();
  }

  handleSubmit(e) {
    e.preventDefault();
    const {deleteUserAction} = this.props
    deleteUserAction(this.props.deleteUserID)
  }

  render() {
    var showDialog = this.props.deleteUserDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    const deleteID = "DeleteDialogUser" + this.props.deleteUserID
    return (
      <Modal id={deleteID} show={showDialog} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Do you want to delete this User: {this.props.deleteUserID}
              </Form.Label>
            </Form.Group>
            <Button id="DeleteDialogCancelButton" variant="secondary" onClick={this.handleClose}>Cancel</Button>
            <Button className="DeleteButton" variant="primary" type="submit" onClick={this.handleSubmit} id="DeleteDialogConfirmButton">
              Delete
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
      showDeleteDialogAction: userActions.getShowDeleteDialogAction,
      closeDeleteDialogAction: userActions.getCloseDeleteDialogAction,
      deleteUserAction: userActions.deleteUser
    },
    dispatch
  );

const ConnectUserDeleteWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDeleteWidget);

export default ConnectUserDeleteWidget;
