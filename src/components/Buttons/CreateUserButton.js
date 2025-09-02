import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getShowCreateDialogAction } from "../../actions/UserManagementAction"

class CreateUserButton extends Component {
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
        <Button className="login" id='UserManagementPageCreateUserButton' variant="light" style={{ backgroundColor: "green", color: "white" }} onClick={this.showCreateDialog}>
          Create User
        </Button>
      </div>
    );
  }
}

export default connect()(CreateUserButton);
