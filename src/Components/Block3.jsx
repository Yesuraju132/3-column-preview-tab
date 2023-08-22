import React from "react";
import Luxury from "../images/icon-luxury.svg";
const Block3 = () => {
  return (
    <div className="block3">
      <img src={Luxury} />
      <h3>LUXURY</h3>
      <p>
        Cruise in the best car brands without the bloated prices. Enjy the
        enhanced comfort of a luxury rental and arrive in style
      </p>
      <div className="load-more-btn">
        <label>Learn more</label>
      </div>
    </div>
  );
};
export default Block3;
