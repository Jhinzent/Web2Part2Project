import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowUpdateDialogAction } from "../../actions/UserManagementAction"

class UpdateUserButton extends Component {
  constructor(props) {
    super(props)
    this.showUpdateDialog = this.showUpdateDialog.bind(this)
}

showUpdateDialog() {
  const dispatch = this.props.dispatch
  dispatch(getShowUpdateDialogAction(this.props.userID))
}

  render() {
    const id = "UserItemEditButton" + this.props.userID;
    return (
      <div>
        <Button className="login" id={id} variant="light" style={{ backgroundColor: "blue", color: "white" }} onClick={this.showUpdateDialog}>
          Update User
        </Button>
      </div>
    );
  }
}

export default connect()(UpdateUserButton);
