import TopMenu from "./TopMenu";
import React, { Component } from "react";
import LandingPage from "./LandingPage";
import {LoggedInPage} from "./LoggedInPage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state.rootReducer;
};

class StartPage extends Component {
    render() {
        const user = this.props.user;
        let pageState;
    
        if (user) {
          pageState = <LoggedInPage myObject={user}/>;
        } else {
          pageState = <LandingPage />;
        }
    
        return (
          <div className="App">
            <TopMenu />
            {pageState}
          </div>
        );
      }
    }

export default connect(mapStateToProps, null)(StartPage);
