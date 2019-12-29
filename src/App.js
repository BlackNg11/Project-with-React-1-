import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./component/header_footer/header";
import Featured from "./component/featured";
import VenueNfo from "./component/venueInfo";
import Hightlight from "./component/Hightlight";


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
      </div>
    );
  }
}

export default App;
