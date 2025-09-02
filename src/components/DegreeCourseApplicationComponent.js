import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,

} from "mdb-react-ui-kit";
import DeleteDegreeCourseApplicationButton from "./Buttons/DeleteDegreeCourseApplicationButton";

export const DegreeCourseApplicationComponent = (props) => {
  const idDeleteButton = "DegreeCourseApplicationDeleteButton" + props._id;
  return (
    <section className="" style={{ backgroundColor: "white" }} id={props.id}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="10">
            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <MDBCardText className="small">
                  <span className="mx-2">|</span> <strong>User: </strong>
                  <span id="ApplicantUserID">{props.applicantUserID}</span>
                  <span className="mx-2">|</span> <strong>Fachbereich: </strong>
                  <span id="DegreeCourseName">{props.degreeCourseName}</span>
                  <strong>Bewerbungsjahr: </strong>
                  <span id="TargetPeriodYear">{props.targetPeriodYear}</span>
                  <strong>Bewerbungssemester: </strong>
                  <span id="TargetPeriodShortName">{props.targetPeriodShortName}</span>
                  <span className="mx-2"> </span> <strong>Universität: </strong>
                  <span id="UniversityShortName">{props.universityShortName}</span>
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-center align-items-center">
                  <DeleteDegreeCourseApplicationButton
                    id={idDeleteButton}
                    Name={props.name}
                    _id={props._id}
                  ></DeleteDegreeCourseApplicationButton>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
