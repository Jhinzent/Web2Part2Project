import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowUpdateDialogAction } from "../../actions/DegreeCourseManagementAction";

class UpdateDegreeCourseButton extends Component {
  constructor(props) {
    super(props);
    this.showUpdateDialog = this.showUpdateDialog.bind(this);
  }

  showUpdateDialog() {
    const dispatch = this.props.dispatch;
    dispatch(getShowUpdateDialogAction(this.props.Name, this.props._id));
  }

  render() {
    const id = "DegreeCourseItemEditButton" + this.props._id;
    return (
      <div>
        <Button
          className="update"
          id={id}
          variant="light"
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={this.showUpdateDialog}
        >
          Update
        </Button>
      </div>
    );
  }
}

export default connect()(UpdateDegreeCourseButton);
