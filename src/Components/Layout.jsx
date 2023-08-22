import React from "react";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import "./layout.css";
const Layout = () => {
  return (
    <div className="container">
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
  );
};
export default Layout;
