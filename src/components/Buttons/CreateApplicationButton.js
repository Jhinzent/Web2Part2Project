import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowCreateAppDialogAction } from "../../actions/DegreeCourseApplicationManagementAction"

class CreateApplicationButton extends Component {
  constructor(props) {
    super(props)
    this.showCreateDialog = this.showCreateDialog.bind(this)
}

showCreateDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowCreateAppDialogAction(this.props.Name, this.props._id))
}

  render() {
    const id = "CreateDegreeCourseApplicationForDegreeCourse" + this.props._id
    return (
      <div>
        <Button className="CreateApplicationButton" id={id} variant="light" style={{ backgroundColor: "green", color: "white" }} onClick={this.showCreateDialog}>
          Create Application
        </Button>
      </div>
    );
  }
}

export default connect()(CreateApplicationButton);
