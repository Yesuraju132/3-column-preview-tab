import React from "react";
import Suv from "../images/icon-suvs.svg";
const Block2 = () => {
  return (
    <div className="block2">
      <img src={Suv} />
      <h3>SUVS</h3>
      <p>
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures
      </p>
      <div className="load-more-btn">
        <label>Learn more</label>
      </div>
    </div>
  );
};
export default Block2;
