import React, { Component } from "react";
import mapbox from "mapbox-gl";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 35,
      lng: -50,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapbox.Map({
      container: this.mapContainer,
      style: "mapbox://styles/jwaro/ck7zpupfu24gj1ipqawa4qvfd",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: true,
      doubleClickZoom: true,
      accessToken:
        "pk.eyJ1Ijoiandhcm8iLCJhIjoiY2s3emxsdWx0MDV6ZTNsbzJxMGpnZnZlayJ9.mtUeUNidHNndai6ovXvN_A"
    });

    map.addControl(new mapbox.NavigationControl());

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
