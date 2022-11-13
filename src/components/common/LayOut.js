import React from "react";
import MenuBar from "../MenuBar";
const LayOut = ({ children }) => {
  return (
    <>
      <MenuBar />

      <div className="layOutContent">{children}</div>
    </>
  );
};

export default LayOut;
