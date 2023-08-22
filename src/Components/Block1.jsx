import React from "react";
import Sedan from "../images/icon-sedans.svg";
const Block1 = () => {
  return (
    <div className="block1">
      <img src={Sedan} />
      <h3>SEDANS</h3>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next round trip.
      </p>
      <div className="load-more-btn">
        <label>Learn more</label>
      </div>
    </div>
  );
};
export default Block1;
