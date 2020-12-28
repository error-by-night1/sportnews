import React, { useState } from "react";
const axios = require("axios");

//-----------------------------------------------------------------------
const Acard = ({ title, body, author, imgurl, is }) => {
  const [reload, setreload] = useState();
  //-------------------------------------
  const execute = (title, is, func1, func2) => {
    func1(title, is);
    func2();
  };
  //-----------------------------------
  function refreshPage() {
    window.location.reload(true);
  }
  //-----------------------------------
  const del = async (tit, is) => {
    try {
      await axios.post("https://nameless-crag-56133.herokuapp.com/ /delete", {
        title: tit,
        is: is,
      });
      setreload(!reload);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  //-----------------------------------

  //-----------------------------------
  return (
    <div className="grid">
      <div className="card card__body">
        <h1 className="tit">{title}</h1>
        <figure className="card__img">
          <img className="mainimg" alt="an img" src={imgurl} />
        </figure>

        <div className="card__desc">{body}</div>

        <div className="authn">
          <h3>by:{author}</h3>
          <input
            onClick={() => {
              execute(title, is, del, refreshPage);
            }}
            className="myButton"
            type="submit"
            value="delete"
          />
        </div>
      </div>
    </div>
  );
};
export default Acard;
