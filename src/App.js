import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./component/header_footer/header";
import Featured from "./component/featured";
import VenueNfo from "./component/venueInfo";
import Hightlight from "./component/Hightlight";
import Pricing from './component/pricing';
import Location from './component/location';
import Footer from './component/header_footer/Footer';



class App extends Component {
  render() {
    return (
      <div
        className="App"
        //style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <VenueNfo />
        <Hightlight />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
