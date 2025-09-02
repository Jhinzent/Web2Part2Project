import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowCreateDialogAction } from "../../actions/DegreeCourseManagementAction"

class CreateDegreeCourseButton extends Component {
  constructor(props) {
    super(props)
    this.showCreateDialog = this.showCreateDialog.bind(this)
}

showCreateDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowCreateDialogAction())
}

  render() {
    return (
      <div>
        <Button id="DegreeCourseManagementPageCreateDegreeCourseButton" className="CreateDegreeCourseButton" variant="light" style={{ backgroundColor: "green", color: "white" }} onClick={this.showCreateDialog}>
          Create DegreeCourse
        </Button>
      </div>
    );
  }
}

export default connect()(CreateDegreeCourseButton);
