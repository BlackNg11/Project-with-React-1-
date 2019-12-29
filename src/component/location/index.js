import React from "react";

const Location = ({}) => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36332.561644481684!2d105.07884555493295!3d10.01661081995844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b38013f46621%3A0x25c2db0e7332872!2zQ8O0bmcgdmnDqm4gS2h1IGzhuqVuIGJp4buDbiBS4bqhY2ggR2nDoQ!5e0!3m2!1svi!2s!4v1577615640101!5m2!1svi!2s"
      width="100%"
      height="500"
      frameborder="0"
      allowFullScreen=""
    ></iframe>

    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Location;
