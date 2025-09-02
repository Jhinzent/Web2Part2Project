import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-bootstrap/Modal";
import * as DegreeCourseApplicationActions from "../../actions/DegreeCourseApplicationManagementAction";

const mapStateToProps = (state) => {
  return state.degreeCourseApplicationsReducer;
};

class DegreeCourseApplicationUpdateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPeriodYear: "",
      targetPeriodShortName: "",
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
      targetPeriodYear,
      targetPeriodShortName,
    } = this.state;
    const { updateDegreeCourseAppAction } = this.props;
    updateDegreeCourseAppAction(
      targetPeriodYear.trim(),
      targetPeriodShortName.trim(),
      this.props.updateid
    );
  }

  render() {
    var showDialog = this.props.updateDegreeCourseApplicationsDialogue;
    if (showDialog === undefined) {
      showDialog = false;
    }
    return (
      <Modal id="DegreeCourseManagementPageCreateComponent" show={showDialog}>
        <Modal.Header>
          <Modal.Title>Update Degree Course Application: {this.props.updateDegreeCourseApplicationsID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                id="CreateDegreeCourseApplicationEditTargetPeriodYear"
                placeholder="Enter TargetPeriodYear"
                name="targetPeriodYear"
                onChange={this.handleChange}
              />
              <Form.Label></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" /* controlId="formTargetPeriodShortName" */>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showCreateDialogAction:
        DegreeCourseApplicationActions.getShowUpdateAppDialogAction,
      closeCreateDialogAction:
        DegreeCourseApplicationActions.getCloseUpdateAppDialogAction,
      updateDegreeCourseAppAction:
        DegreeCourseApplicationActions.updateDegreeCourseApplication,
    },
    dispatch
  );

const ConnectDegreeCourseAppUpdateWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeCourseApplicationUpdateWidget);

export default ConnectDegreeCourseAppUpdateWidget;
