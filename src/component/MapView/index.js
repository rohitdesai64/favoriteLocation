import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../Header";
import { connect } from "react-redux";
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 20.5937, lng: 78.9629 }}>
    {props.isMarkerShown && (<>
      <Marker
        label="India"
        position={{ lat: 20.5937, lng: 78.9629 }}
        onClick={props.onMarkerClick}
      />
      <Marker
        label="bbb"
        position={{ lat: 34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    </>)}
  </GoogleMap>
));

class MapView extends React.Component {
  state = {
    isMarkerShown: true
  };

  handleMarkerClick = () => {
    console.log(" Open Dialog")
    // this.setState({ isMarkerShown: false });
    // this.delayedShowMarker();
  };

  render() {
    const { marks } = this.state;

    return (
      <>
        <Header title="Map View" />

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          Map View
          <div style={{ width: 900 }}>
            <MyMapComponent
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
            />
          </div>
        </Grid>
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
