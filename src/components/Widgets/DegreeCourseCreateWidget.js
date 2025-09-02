import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import * as DegreeCourseActions from "../../actions/DegreeCourseManagementAction";

const mapStateToProps = (state) => {
  return state.degreeCourseReducer;
};

class DegreeCourseCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      shortName: "",
      universityName: "",
      universityShortName: "",
      departmentName: "",
      departmentShortName: "",
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
    const {
      name,
      shortName,
      universityName,
      universityShortName,
      departmentName,
      departmentShortName,
    } = this.state;
    const { createDegreeCourseAction } = this.props;
    createDegreeCourseAction(
      name.trim(),
      shortName.trim(),
      universityName.trim(),
      universityShortName.trim(),
      departmentName.trim(),
      departmentShortName.trim()
    );
  }

  render() {
    var showDialog = this.props.createDegreeCourseDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    return (
      <Modal id="DegreeCourseManagementPageCreateComponent" show={showDialog}>
        <Modal.Header>
          <Modal.Title>Create Degree Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditName"
                placeholder="Enter Name"
                name="name"
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditShortName"
                placeholder="Enter ShortName"
                name="shortName"
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditUniversityName"
                placeholder="Enter UniversityName"
                name="universityName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditUniversityShortName"
                placeholder="Enter UniversityShortName"
                name="universityShortName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditDepartmentName"
                placeholder="Enter DepartmentName"
                name="departmentName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                id="CreateDegreeCourseComponentEditDepartmentShortName"
                placeholder="Enter ShortName"
                name="shortName"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              id="CreateDegreeCourseComponentCreateDegreeCourseButton"
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Create
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showCreateDialogAction: DegreeCourseActions.getShowCreateDialogAction,
      closeCreateDialogAction: DegreeCourseActions.getCloseCreateDialogAction,
      createDegreeCourseAction: DegreeCourseActions.createDegreeCourse,
    },
    dispatch
  );

const ConnectDegreeCourseCreateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseCreateWidget);

export default ConnectDegreeCourseCreateWidget;
