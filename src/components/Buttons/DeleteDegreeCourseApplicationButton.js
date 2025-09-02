import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowDeleteAppDialogAction } from "../../actions/DegreeCourseApplicationManagementAction"

class DeleteDegreeCourseApplicationButton extends Component {
  constructor(props) {
    super(props)
    this.showDeleteDialog = this.showDeleteDialog.bind(this)
}

showDeleteDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowDeleteAppDialogAction(this.props.Name, this.props._id))
}

  render() {
    const id = "DegreeCourseApplicationItemDeleteButton" + this.props._id;
    return (
      <div>
        <Button className="DeleteDegreeCourseButton" id={id} variant="light" style={{ backgroundColor: "red", color: "white" }} onClick={this.showDeleteDialog}>
          Delete
        </Button>
      </div>
    );
  }
}

export default connect()(DeleteDegreeCourseApplicationButton);
