import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DegreeCourseActions from "../../actions/DegreeCourseManagementAction";

const mapStateToProps = (state) => {
  return state.degreeCourseReducer;
};

class DegreeCourseDeleteWidget extends Component {
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
    const {deleteDegreeCourseAction} = this.props
    deleteDegreeCourseAction(this.props.deleteid)
  }

  render() {
    var showDialog = this.props.deleteDegreeCourseDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    const deleteID = "DeleteDialogDegreeCourse" + this.props.deleteid
    return (
      <Modal id={deleteID} show={showDialog}>
        <Modal.Header>
          <Modal.Title>Delete Degree Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Do you want to delete this Degree Course: {this.props.deleteDegreeCourseID}
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
      showDeleteDialogAction: DegreeCourseActions.getShowDeleteDialogAction,
      closeDeleteDialogAction: DegreeCourseActions.getCloseDeleteDialogAction,
      deleteDegreeCourseAction: DegreeCourseActions.deleteDegreeCourse
    },
    dispatch
  );

const ConnectDegreeCourseDeleteWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseDeleteWidget);

export default ConnectDegreeCourseDeleteWidget;
