import TopMenu from "../TopMenu";
import React, { Component } from "react";
import { connect } from "react-redux";
import { DegreeCourseComponent } from "../DegreeCourseComponent";
import CreateDegreeCourseButton from "../Buttons/CreateDegreeCourseButton";
import DegreeCourseCreateWidget from "../Widgets/DegreeCourseCreateWidget";
import DegreeCourseDeleteWidget from "../Widgets/DegreeCourseDeleteWidget";

const mapStateToProps = (state) => {
  return state.degreeCourseReducer;
};

class DegreeCourseManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degreeCourses: [],
      loading: true,
      showCreateWidget: false,
    };
    this.getDegreeCoursesData = this.getDegreeCoursesData.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.toggleCreateWidget = this.toggleCreateWidget.bind(this);
  }

  getDegreeCoursesData() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return fetch("https://localhost/api/degreeCourses", requestOptions).then(
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
        this.setState({ loading: false, degreeCourses: data });
      }
    });
  }

  toggleCreateWidget() {
    this.setState((prevState) => ({
      showCreateWidget: !prevState.showCreateWidget,
    }));
  }

  componentDidMount() {
    this.getDegreeCoursesData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.createDegreeCourseDialogue !== prevProps.createDegreeCourseDialogue ||
      this.props.deleteDegreeCourseDialogue !== prevProps.deleteDegreeCourseDialogue ||
      this.props.updateDegreeCourseDialogue !== prevProps.updateDegreeCourseDialogue
    ) {
      this.getDegreeCoursesData();
    }
  }

  render() {
    const degrees = this.state.degreeCourses.map((data) => {
      const id = "DegreeCourseItem" + data.id;
      return (
        <DegreeCourseComponent
          key={data.id} 
          id={id}
          _id={data.id} 
          name={data.name}
          shortName={data.shortName}
          universityName={data.universityName}
          universityShortName={data.universityShortName}
          departmentName={data.departmentName}
          departmentShortName={data.departmentShortName}
        />
      );
    });
    return (
      <div id="DegreeCourseManagementPageListComponent">
        <TopMenu />
        <div className="d-flex justify-content-left">
          <CreateDegreeCourseButton />
        </div>
        <DegreeCourseCreateWidget />
        <DegreeCourseDeleteWidget />
        {degrees}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(DegreeCourseManagement);
