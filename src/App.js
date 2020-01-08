import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Redirect as Router } from "react-router-dom";
import "./assets/css/App.css";
import Login from "./component/Login";
import MapView from "./component/MapView";

class App extends React.Component {

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
        <Route path="/mapView" render={() => <MapView />} />
      </Grid>
    );
  }
}

export default App