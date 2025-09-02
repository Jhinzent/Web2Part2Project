import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import { Buffer } from "buffer";
import * as DegreeCourseApplicationsActions from "../../actions/DegreeCourseApplicationManagementAction";

class DegreeCourseApplicationCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicantUserID: "manfred",
      targetPeriodYear: "",
      targetPeriodShortName: "",

      _id: props._id,
      name: props.name,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    const { showCreateAppDialogAction } = this.props;
    showCreateAppDialogAction();
  }

  handleClose() {
    const { closeCreateAppDialogAction } = this.props;
    closeCreateAppDialogAction();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { _id } = this.props;
    const { targetPeriodYear, targetPeriodShortName, applicantUserID } = this.state;

    const { createDegreeCourseAppAction } = this.props;
    createDegreeCourseAppAction(
      applicantUserID.trim(),
      _id.trim(),
      targetPeriodYear.trim(),
      targetPeriodShortName.trim()
    );
  }

  render() {
    const { accessToken, name } = this.props;
    const showDialog = this.props.createDegreeCourseAppDialogue;

    const pl = accessToken.split(".")[1];
    const encodepl = Buffer.from(pl, "base64").toString("ascii");
    const decoded = JSON.parse(encodepl);
    const isAdministrator = decoded.isAdministrator;

    if (isAdministrator === true) {
      return (
        <Modal id="DegreeCourseManagementPageCreateComponent" show={showDialog}>
          <Modal.Header>
            <Modal.Title>Create Degree Course Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Studiengang</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationCourse"
                  name="degreeCourseID"
                  defaultValue={name}
                  readOnly={true}
                />
                <Form.Label>User-ID</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationEditUserID"
                  placeholder="Enter UserID"
                  name="applicantUserID"
                  onChange={this.handleChange}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  id="CreateDegreeCourseApplicationEditTargetPeriodYear"
                  name="targetPeriodYear"
                  placeholder="Enter Year"
                />
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationEditTargetPeriodName"
                  as="select"
                  name="targetPeriodShortName"
                  aria-label="Default select example"
                  defaultValue={""}
                  onChange={this.handleChange}
                >
                  <option value={""}>Bitte Semester auswählen</option>
                  <option value={"WiSe"}>Wintersemester</option>
                  <option value={"SoSe"}>Sommersemester</option>
                </Form.Control>
              </Form.Group>

              <Button
                id="CreateDegreeCourseApplicationCreateButton"
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
    } else {
      return (
        <Modal id="DegreeCourseManagementPageCreateComponent" show={showDialog}>
          <Modal.Header>
            <Modal.Title>Create Degree Course Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Studiengang</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationCourse"
                  name="degreeCourseID"
                  defaultValue={name}
                  readOnly={true}
                />
                <Form.Label>User-ID</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationEditUserID"
                  placeholder="Enter UserID"
                  name="applicantUserID"
                  defaultValue="manfred"
                  readOnly={true}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  id="CreateDegreeCourseApplicationEditTargetPeriodYear"
                  name="targetPeriodYear"
                  placeholder="Enter Year"
                />
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  id="CreateDegreeCourseApplicationEditTargetPeriodName"
                  as="select"
                  name="targetPeriodShortName"
                  aria-label="Default select example"
                  defaultValue={""}
                  onChange={this.handleChange}
                >
                  <option value={""}>Bitte Semester auswählen</option>
                  <option value={"WiSe"}>Wintersemester</option>
                  <option value={"SoSe"}>Sommersemester</option>
                </Form.Control>
              </Form.Group>

              <Button
                id="CreateDegreeCourseApplicationCreateButton"
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
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.rootReducer.accessToken,

    applicantUserID: state.degreeCourseReducer.applicantUserID,
    targetPeriodYear: state.degreeCourseReducer.targetPeriodYear,
    targetPeriodShortName: state.degreeCourseReducer.targetPeriodShortName,

    createDegreeCourseAppDialogue:
      state.degreeCourseApplicationsReducer.createDegreeCourseAppDialogue,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showCreateAppDialogAction:
        DegreeCourseApplicationsActions.getShowCreateAppDialogAction,
      closeCreateAppDialogAction:
        DegreeCourseApplicationsActions.getCloseCreateAppDialogAction,
      createDegreeCourseAppAction:
        DegreeCourseApplicationsActions.createDegreeCourseApplication,
    },
    dispatch
  );

const ConnectDegreeCourseAppCreateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseApplicationCreateWidget);

export default ConnectDegreeCourseAppCreateWidget;
