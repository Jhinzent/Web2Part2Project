import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import * as DegreeCourseActions from "../../actions/DegreeCourseManagementAction";

class DegreeCourseUpdateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      shortName: props.shortName,
      universityName: props.universityName,
      universityShortName: props.universityShortName,
      departmentName: props.departmentName,
      departmentShortName: props.departmentShortName,
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
    const {
      name,
      shortName,
      universityName,
      universityShortName,
      departmentName,
      departmentShortName,
    } = this.props;

    const { updateDegreeCourseAction } = this.props;
    updateDegreeCourseAction(
      name.trim(),
      shortName.trim(),
      universityName.trim(),
      universityShortName.trim(),
      departmentName.trim(),
      departmentShortName.trim(),
      this.props.updateid
    );
    alert("Successfully updated the user: " + this.props.updateDegreeCourseID)
  }

  render() {
    var showDialog = this.props.updateDegreeCourseDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    
    return (
      <Modal id="DegreeCourseManagementPageEditComponent" show={showDialog}>
        <Modal.Header>
          <Modal.Title>Update Degree Course: {this.props.updateDegreeCourseID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditName"
                placeholder="Enter Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditShortName"
                placeholder="Enter ShortName"
                name="shortName"
                onChange={this.handleChange}
                value={this.state.shortName}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditUniversityName"
                placeholder="Enter UniversityName"
                name="universityName"
                onChange={this.handleChange}
                value={this.state.universityName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditUniversityShortName"
                placeholder="Enter UniversityShortName"
                name="universityShortName"
                onChange={this.handleChange}
                value={this.state.universityShortName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditDepartmentName"
                placeholder="Enter DepartmentName"
                name="departmentName"
                onChange={this.handleChange}
                value={this.state.departmentName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="EditDegreeCourseComponentEditDepartmentShortName"
                placeholder="Enter ShortName"
                name="departmentShortName"
                onChange={this.handleChange}
                value={this.state.departmentShortName}
              />
            </Form.Group>

            <Button
              id="EditDegreeCourseComponentSaveDegreeCourseButton"
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Update
            </Button>
            <Button
              id="OpenDegreeCourseManagementPageListComponentButton"
              variant="secondary"
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return state.degreeCourseReducer;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showUpdateDialogAction: DegreeCourseActions.getShowUpdateDialogAction,
      closeUpdateDialogAction: DegreeCourseActions.getCloseUpdateDialogAction,
      updateDegreeCourseAction: DegreeCourseActions.updateDegreeCourse,
    },
    dispatch
  );

const ConnectDegreeCourseUpdateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseUpdateWidget);

export default ConnectDegreeCourseUpdateWidget;
