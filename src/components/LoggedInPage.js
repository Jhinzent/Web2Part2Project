
import { Alert } from "react-bootstrap";

export const LoggedInPage = (props) => {
  return (
    <div className="page-content" id="StartPage">
      <Alert variant="success">
        <Alert.Heading>Congrats!</Alert.Heading>
        <p>You are logged in! Hi {props.myObject.userID} </p>
      </Alert>
    </div>
  );
};
