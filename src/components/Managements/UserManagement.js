import TopMenu from "../TopMenu";
import React, { Component } from "react";
import { connect } from "react-redux";
import { UserComponent } from "../UserComponent";
import CreateUserButton from "../Buttons/CreateUserButton";
import UserCreateWidget from "../Widgets/UserCreateWidget";
import UserDeleteWidget from "../Widgets/UserDeleteWidget";

const mapStateToProps = (state) => {
  return state.userReducer;
};

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
    this.getUsersData = this.getUsersData.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  getUsersData() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return fetch("https://localhost/api/users/", requestOptions).then(
      this.handleResponse
    );
  }

  handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      } else {
        this.setState({ loading: false, users: data });
      }
    });
  }

  componentDidMount() {
    this.getUsersData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.createUserDialogue !== prevProps.createUserDialogue ||
      this.props.deleteUserDialogue !== prevProps.deleteUserDialogue ||
      this.props.updateUserDialogue !== prevProps.updateUserDialogue
    ) {
      this.getUsersData();
    }
  }

  render() {
    const userProfiles = this.state.users.map((data) => {
      const id = "UserItem" + data.userID;
      return (
        <UserComponent
          key={data.userID}
          id={id}
          user={data.user}
          firstName={data.firstName}
          lastName={data.lastName}
          userID={data.userID}
          isAdministrator={data.isAdministrator}
        />
      );
    });

    return (
      <div id="UserManagementPage">
        <TopMenu />
        <div className="d-flex justify-content-left">
          <CreateUserButton id="UserManagementPageCreateUserButton" />
        </div>
        <UserCreateWidget />
        <UserDeleteWidget />
        {userProfiles}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(UserManagement);
