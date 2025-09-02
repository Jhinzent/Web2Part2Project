import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowUpdateDialogAction } from "../../actions/DegreeCourseManagementAction"

class UpdateDegreeCourseApplicationButton extends Component {
  constructor(props) {
    super(props)
    this.showUpdateDialog = this.showUpdateDialog.bind(this)
}

showUpdateDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowUpdateDialogAction(this.props.Name, this.props._id))
}

  render() {
    return (
      <div>
        <Button className="update" id='OpenUpdateDialogButton' variant="light" style={{ backgroundColor: "blue", color: "white" }} onClick={this.showUpdateDialog}>
          Update
        </Button>
      </div>
    );
  }
}

export default connect()(UpdateDegreeCourseApplicationButton);
