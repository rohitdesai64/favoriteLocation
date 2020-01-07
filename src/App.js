import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Redirect as Router } from "react-router-dom";
import "./assets/css/App.css";
import Login from "./component/Login";
import axios from "axios";
import MapView from "./component/MapView";
import { connect } from 'react-redux'
import ALL_USERS from './action'
// import { dispatch } from "store"
// import {}

class App extends React.Component {
  componentDidMount() {
    // dispatch('LOGGED_IN')
    this.props.getAllUser()
    // console.log(" Store ------ ", this.props.allUsers)
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className="mainBody"
      >
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/mapView" render={() => <MapView />} />
      </Grid>
    );
  }
}

function mapState(state) {
  // console.log("Map State ****** ", state)
  return {
    allUsers: state.allUsers
  }
}

function mapDispath(dispatch) {
  return {
    getAllUser: () => dispatch({ type: ALL_USERS }),
  }
}

export default connect(
  mapState,
  mapDispath
)(App)