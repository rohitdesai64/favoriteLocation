import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../Header";

class LoginList extends React.Component {
  render() {
    return (
      <>
        <Header title="Login List" />

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className="mainBody"
        >
          Test
        </Grid>
      </>
    );
  }
}

export default LoginList;
