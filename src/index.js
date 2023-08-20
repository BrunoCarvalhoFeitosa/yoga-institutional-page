import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "aos/dist/aos.css"
import "react-toastify/dist/ReactToastify.css"
import "keen-slider/keen-slider.min.css"
import "leaflet/dist/leaflet.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);