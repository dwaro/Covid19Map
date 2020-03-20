import React from "react";
import Top1 from "./Top1";
import Top2 from "./Top2";

const Top = props => {
  return (
    <div style={{ height: "50%", width: "100%" }}>
      <Top1 style={{ display: "inline-block" }} />
      <Top2 style={{ display: "inline-block" }} />
    </div>
  );
};

export default Top;
