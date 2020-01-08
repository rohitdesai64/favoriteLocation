import React from "react";
import { compose, withProps } from "recompose";
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
  <GoogleMap defaultZoom={2} 
  defaultCenter={{ lat: 25.0391667, lng: 131.525 }}
  >
    {props.isMarkerShown && (
      <>
        {props.loggedInUser.maps.map(user => (
        <Marker
          key={user.id}
          label={user.location}
          position={{ lat: user.latitude, lng: user.longitude }}
          onClick={() => props.onMarkerClick(user)}
        />)
        )}
      </>
    )}
  </GoogleMap>
));

class DisplayMap extends React.Component {
  state = {
    isMarkerShown: true,
    locationDialog: false,
  };

  handleMarkerClick = value => {
    this.props.openDialog(value)
  };

  render() {
    return (
      <>
        <MyMapComponent {...this.props}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </>
    );
  }
}

export default DisplayMap;
