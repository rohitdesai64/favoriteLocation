import React, { useReducer } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import Header from "../Header";
import { connect } from "react-redux";
import AddDialog from "../Dialog";
import DisplayMap from "./DisplayMap";
import DubaiImg from "../../assets/img/dubai.jpg"
import IndiaImg from "../../assets/img/india.jpg"
import SingaporeImg from "../../assets/img/singapore.jpg"
import SrilankaImg from "../../assets/img/srilanka.jpeg"
import ThailandImg from "../../assets/img/thailand.jpeg"

class MapView extends React.Component {
  state = {
    locationDialog: false,
    dialogUser: [],
    dialogImg: null
  };

  componentDidUpdate() {
    if(this.state.locationDialog && this.state.dialogImg == null) {
      if(this.state.dialogUser.location === "India")
        this.setState({ dialogImg: IndiaImg })
      else if(this.state.dialogUser.location === "Singapore")
        this.setState({ dialogImg: SingaporeImg })
      else if(this.state.dialogUser.location === "Dubai")
        this.setState({ dialogImg: DubaiImg })
      else if(this.state.dialogUser.location === "Thailand")
        this.setState({ dialogImg: ThailandImg })
      else this.setState({ dialogImg: SrilankaImg })
    }
  }

  handleDialog = () => {
    this.setState({ locationDialog: true });
  };

  closeDialog = () => {
    this.setState({ locationDialog: false, dialogImg: null });
  };

  render() {
    const locationContact = (
      <>
        <Grid container direction="column">
          <Typography variant="h6"> {this.state.dialogUser.location} </Typography>
          <img src={this.state.dialogImg && this.state.dialogImg} width="700" style={{ margin: 25 }} />
          <Typography variant="body1">{this.state.dialogUser.desc}</Typography>
        </Grid>
      </>
    );
    const locationActions = <Button onClick={this.closeDialog}>Close</Button>;

    return (
      <>
        <Header title="Map View" />
        <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h4">  Map View </Typography>
         
          <div style={{ width: 900 }}>
            {this.props.allUsers && this.props.allUsers.length && (
              <DisplayMap
                loggedInUser={this.props.allUsers[0]}
                openDialog={value =>
                  this.setState({ dialogUser: value, locationDialog: true })
                }
              />
            )}
          </div>
        </Grid>

        <AddDialog
          onClose={this.closeDialog}
          open={this.state.locationDialog}
          title={"Location Details"}
          content={locationContact}
          actions={locationActions}
        />
      </>
    );
  }
}

function mapState(state) {
  return {
    allUsers: state.allUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapState)(MapView);
