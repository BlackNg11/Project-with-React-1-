import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./component/header_footer/header";
import Featured from "./component/featured";
import VenueNfo from "./component/venueInfo";
import Hightlight from "./component/Hightlight";
import Pricing from './component/pricing';


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
      </div>
    );
  }
}

export default App;
