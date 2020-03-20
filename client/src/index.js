import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import mapbox from "mapbox-gl";

mapbox.accessToken =
  "pk.eyJ1Ijoiandhcm8iLCJhIjoiY2s3emxsdWx0MDV6ZTNsbzJxMGpnZnZlayJ9.mtUeUNidHNndai6ovXvN_A";

ReactDOM.render(<App />, document.getElementById("root"));
