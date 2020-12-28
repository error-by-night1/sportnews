import Button from "@material-ui/core/Button";
import React from "react";
import DropdownM from "./dropdown";
const Cookies = require("js-cookie");
const { useState } = require("react");
const axios = require("axios");
//-----------------------------------------------------------------------
const Add = () => {
  //____________________________________________________________________
  const [body, setbody] = useState("");
  const [title, settitle] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [type, settype] = useState("");

  //------------------------------------------------------------------------
  const typeset = (type) => {
    settype(type);
  };
  //-----------------------------------------
  function refreshPage() {
    window.location.reload(true);
  }
  const execute = (e, func1, func2) => {
    func1(e);
    func2();
  };
  //______________________________________
  const send = async (e) => {
    if (body === "" || title === "" || imgurl === "" || !type) {
      alert(
        "make sure you havent left anything empty and type must be either news or article"
      );
    } else {
      await axios.post("http://localhost:8080/add", {
        title,
        body,
        imgurl,
        type: type.value,
        username: Cookies.get("name"),
      });
      setbody("");
      setimgurl("");
      settype(null);
      settitle("");
    }
  };
  //-----------------------------------
  return (
    <div className="add-cont">
      <div className="group">
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          placeholder="title"
          type="text"
          required="required"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
      <div className="group">
        <input
          onChange={(e) => {
            setimgurl(e.target.value);
          }}
          placeholder="image url"
          type="text"
          required="required"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>

      <div className="group">
        <textarea
          onChange={(e) => {
            setbody(e.target.value);
          }}
          placeholder="your story"
          type="text"
          required="required"
          className="comment"
        ></textarea>
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
      <div className="group">
        <DropdownM set={typeset} />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
      <Button
        onClick={(e) => {
          execute(e, send, refreshPage);
        }}
        className="sendbut"
        variant="contained"
        color="primary"
      >
        add
      </Button>
    </div>
  );
};
export default Add;
