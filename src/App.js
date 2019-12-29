import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./component/header_footer/header";
import Featured from "./component/featured";
import VenueNfo from "./component/venueInfo";
import Hightlight from "./component/Hightlight";
import Pricing from "./component/pricing";
import Location from "./component/location";
import Footer from "./component/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        //style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="VenueNfo">
          <VenueNfo />
        </Element>

        <Element name="highlight">
          <Hightlight />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
