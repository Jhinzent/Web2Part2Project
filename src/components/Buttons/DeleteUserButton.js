import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowDeleteDialogAction } from "../../actions/UserManagementAction"

class DeleteUserButton extends Component {
  constructor(props) {
    super(props)
    this.showDeleteDialog = this.showDeleteDialog.bind(this)
}

showDeleteDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowDeleteDialogAction(this.props.userID))
}

  render() {
    const id = "UserItemDeleteButton" + this.props.userID;
    return (
      <div>
        <Button className="login" id={id} variant="light" style={{ backgroundColor: "red", color: "white" }} onClick={this.showDeleteDialog}>
          Delete
        </Button>
      </div>
    );
  }
}

export default connect()(DeleteUserButton);
