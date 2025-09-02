import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody /* ,
  MDBCardImage */,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import UpdateButton from "./Buttons/UpdateUserButton";
import DeleteButton from "./Buttons/DeleteUserButton";
import { connect } from "react-redux";
import UserUpdateWidget from "../components/Widgets/UserUpdateWidget";

const mapStateToProps = (state) => {
  return {
    accessToken: state.rootReducer.accessToken,
  };
};

export const UserComponent = (props) => {
  const idDeleteButton = "UserItemDeleteButton" + props.userID;
  const idUpdateButton = "UserItemEditButton" + props.userID;
  return (
    <section
      className="flexbox-container"
      style={{ backgroundColor: "white" }}
      id={props.id}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBTypography tag="h5">
                    {props.firstName} {props.lastName}
                  </MDBTypography>
                  <MDBCardText>Student</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">UserID</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.userID}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.userID}@bht-berlin.de
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Personal Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">First Name</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.firstName}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Last Name</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.lastName}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <br></br>
                    <div className="d-flex justify-content-center">
                      <UpdateButton
                        id={idUpdateButton}
                        userID={props.userID}
                      ></UpdateButton>
                      <DeleteButton
                        id={idDeleteButton}
                        userID={props.userID}
                      ></DeleteButton>
                    </div>
                    <UserUpdateWidget
                      firstName={props.firstName}
                      lastName={props.lastName}
                      userID={props.userID}
                      isAdministrator={props.isAdministrator}
                    />
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default connect(mapStateToProps)(UserComponent);
