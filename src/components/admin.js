import React from "react";
import Acard from "./admincards";
import Add from "./add";
import Empty from "./nopoststoshow";
const { useState } = require("react");
const { useEffect } = require("react");

const axios = require("axios");
//-----------------------------------------------------------------------
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  withCredentials: true,
  "Access-Control-Allow-Credentials": "true",
};
//_______________________________________________________________________
const Admin = ({ add }) => {
  //____________________________________________________________________

  const [state, setstate] = useState();
  //______________________________________________________________________
  useEffect(async () => {
    try {
      const resp = await axios.get("http://localhost:8080/admindata", {
        headers: headers,
      });
      let article = resp.data.articles;
      let news = resp.data.news;
      let final = [...article, ...news];
      setstate(final);
    } catch (err) {
      console.error(err);
    }
  }, []);

  //---------------------------------------
  const show = () => {
    if (state && !add) {
      if (state.length < 1) {
        return <Empty />;
      }
      let x = state.map((item, index) => {
        return (
          <Acard
            key={index}
            title={item.title}
            body={item.body}
            imgurl={item.imgurl}
            author={item.author}
            is={item.isarticle ? true : false}
          />
        );
      });
      return x;
    } else if (state && add) {
      return <Add />;
    }
  };

  //-----------------------------------
  return (
    <div className="admin-cont">
      <div className="posts">{show()}</div>
    </div>
  );
};
export default Admin;
