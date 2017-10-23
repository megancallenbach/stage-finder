import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Contact.css'
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";


const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 52.388933, lng: 4.639329 }}
  >
    <Marker
      position={{ lat: 52.388933, lng: 4.639329 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <p>what</p>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);



class Contact extends PureComponent {
  render() {
    return(
      <div className="contact-page">
        <Navbar searchBar={true} />
        <div className="scroll">
          <h1 className="contact-title"><i className="fa fa-music"></i>  Welcome to StageFinder  <i className="fa fa-music"></i></h1>
          <div className="contact-container">
            <div className="row col-sm-6">
             <h2> Contact Info </h2>

              <p><i className="fa fa-map-marker"></i>Address: Kennemerplein 11-17, 2011 MH Haarlem</p>
              <p><i className="fa fa-phone"></i>Telephone: +316 15 01 58 58</p>
              <p><i className="fa fa-envelope"></i>Email: info@stagefinder.nl</p>
              <p><i className="fa fa-clock-o"></i>Open time: 24/7</p>

            </div>
            <div className="map col-sm-6">
              <MapWithAMakredInfoWindow
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ margin: '15px', height: `220px`, width: `370px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Contact;
