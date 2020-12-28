import React from "react";

//-----------------------------------------------------------------------
const Empty = () => {
  //-----------------------------------
  return (
    <div className="noposts">
      <img className="imgnot" alt="" src={require("../img.png")} />
      <h3>no posts to show</h3>
    </div>
  );
};
export default Empty;
