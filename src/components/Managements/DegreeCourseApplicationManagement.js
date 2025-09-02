import TopMenu from "../TopMenu";
import React, { Component } from "react";
import { connect } from "react-redux";
import { DegreeCourseApplicationComponent } from "../DegreeCourseApplicationComponent";
import DegreeCourseApplicationDeleteWidget from "../Widgets/DegreeCourseApplicationDeleteWidget";
import DegreeCourseApplicationUpdateWidget from "../Widgets/DegreeCourseApplicationUpdateWidget";


const mapStateToProps = (state) => {
  return state.degreeCourseApplicationsReducer;
};

class DegreeCourseApplicationsManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DegreeCourseApplications: [],
      loading: true,
    };
    this.getDegreeCourseApplicationsData = this.getDegreeCourseApplicationsData.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  getDegreeCourseApplicationsData() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return fetch("https://localhost/api/degreeCourseApplications", requestOptions).then(
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
        this.setState({ loading: false, DegreeCourseApplications: data });
      }
    });
  }

  componentDidMount() {
    this.getDegreeCourseApplicationsData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.deleteDegreeCourseApplicationsDialogue !== prevProps.deleteDegreeCourseApplicationsDialogue ||
      this.props.updateDegreeCourseApplicationsDialogue !== prevProps.updateDegreeCourseApplicationsDialogue
    ) {
      this.getDegreeCourseApplicationsData();
    }
  }

  render() {
    const degrees = this.state.DegreeCourseApplications.map((data) => {
      const id = "DegreeCourseApplicationItem" + data.id;
      return (
        <DegreeCourseApplicationComponent
          key={data._id}
          id={id}
          _id={data.id}
          applicantUserID={data.applicantUserID}
          degreeCourseName={data.degreeCourseName}
          targetPeriodYear={data.targetPeriodYear}
          targetPeriodShortName={data.targetPeriodShortName}
          universityShortName={data.universityShortName}
          departmentShortName={data.departmentShortName}
        />
      );
    });
    return (
      <div id="DegreeCourseApplicationManagementPageListComponent">
        <TopMenu />
        <DegreeCourseApplicationDeleteWidget />
        <DegreeCourseApplicationUpdateWidget />
        {degrees}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(DegreeCourseApplicationsManagement);
