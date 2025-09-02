import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import UpdateDegreeCourseButton from "./Buttons/UpdateDegreeCourseButton";
import DeleteDegreeCourseButton from "./Buttons/DeleteDegreeCourseButton";
import CreateApplicationButton from "./Buttons/CreateApplicationButton";
import DegreeCourseApplicationCreateWidget from "../components/Widgets/DegreeCourseApplicationCreateWidget";
import { connect } from "react-redux";
import DegreeCourseUpdateWidget from "../components/Widgets/DegreeCourseUpdateWidget";

const mapStateToProps = (state) => {
  return {
    accessToken: state.rootReducer.accessToken,
  };
};

export const DegreeCourseComponent = (props) => {
  const idDeleteButton = "DegreeCourseItemDeleteButton" + props.id;
  const idUpdateButton = "DegreeCourseItemEditButton" + props.id;
  const idCreateAppButton =
    "CreateDegreeCourseApplicationForDegreeCourse" + props.id;

  return (
    <section className="" style={{ backgroundColor: "white" }} id={props.id}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="10">
            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h3" id="Name">
                  {props.name}
                </MDBTypography>
                <MDBCardText className="small">
                  <span className="mx-2"> </span> <strong>Universität: </strong>
                  <span id="UniversityName">{props.universityName}</span>
                  <span className="mx-2">|</span> <strong>Stadt: </strong>
                  <span id="DepartmentName">{props.departmentName}</span>
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-center align-items-center">
                  <UpdateDegreeCourseButton
                    id={idUpdateButton}
                    Name={props.name}
                    _id={props._id}
                  ></UpdateDegreeCourseButton>
                  <DeleteDegreeCourseButton
                    id={idDeleteButton}
                    Name={props.name}
                    _id={props._id}
                  ></DeleteDegreeCourseButton>
                  <CreateApplicationButton
                    id={idCreateAppButton}
                    Name={props.name}
                    _id={props._id}
                  ></CreateApplicationButton>
                  <DegreeCourseApplicationCreateWidget
                    name={props.name}
                    _id={props._id}
                  />
                  <DegreeCourseUpdateWidget
                    name={props.name}
                    shortName={props.shortName}
                    universityName={props.universityName}
                    universityShortName={props.universityShortName}
                    departmentName={props.departmentName}
                    departmentShortName={props.departmentShortName}
                  />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default connect(mapStateToProps)(DegreeCourseComponent);
