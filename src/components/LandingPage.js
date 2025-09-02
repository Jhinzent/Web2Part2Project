import { Alert } from "react-bootstrap";
import { Component } from "react";

class LandingPage extends Component {
    render() {
      return (
        <div  className="page-content" id="LandingPage">
          <Alert variant="danger">
            <Alert.Heading>Not yet!</Alert.Heading>
            <p>You are not logged in!</p>
          </Alert>
        </div>
      );
    }
  }

  export default LandingPage