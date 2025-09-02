import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DegreeCourseApplicationActions from "../../actions/DegreeCourseApplicationManagementAction";

const mapStateToProps = (state) => {
  return state.degreeCourseApplicationsReducer;
};

class DegreeCourseApplicationDeleteWidget extends Component {
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
    const {deleteDegreeCourseApplicationAction} = this.props
    deleteDegreeCourseApplicationAction(this.props.deleteid)
  }

  render() {
    var showDialog = this.props.deleteDegreeCourseApplicationsDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    const deleteID = "„DeleteDialogDegreeCourseApplication" + this.props.deleteid
    return (
      <Modal id={deleteID} show={showDialog}>
        <Modal.Header>
          <Modal.Title>Delete Degree Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Do you want to delete this Degree Course: {this.props.deleteDegreeCourseApplicationsID}
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
      showDeleteDialogAction: DegreeCourseApplicationActions.getShowDeleteAppDialogAction,
      closeDeleteDialogAction: DegreeCourseApplicationActions.getCloseDeleteAppDialogAction,
      deleteDegreeCourseApplicationAction: DegreeCourseApplicationActions.deleteDegreeCourseApplication
    },
    dispatch
  );

const ConnectDegreeCourseDeleteWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseApplicationDeleteWidget);

export default ConnectDegreeCourseDeleteWidget;
