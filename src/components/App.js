import React from "react";
import Card from "./card";
import Search from "./search";
import Navbar from "./navbar";
import Login from "./login";
import Admin from "./admin";
import Empty from "./nopoststoshow";
const Cookies = require("js-cookie");
const { useState } = require("react");
const { useEffect } = require("react");
const axios = require("axios");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  withCredentials: true,
  "Access-Control-Allow-Credentials": "true",
};
//-----------------------------------------------------------------------
const App = () => {
  //____________________________________________________________________
  // var hash = bcrypt.hashSync("bacon", 8);
  // console.log(hash);

  //____________________________________________________________________

  const [state, setstate] = useState();
  const [view, setview] = useState("news");
  const [cookie, setcookie] = useState();
  const [toggle, settoggle] = useState(false);
  const [add, setadd] = useState(false);

  //______________________________________________________________________
  const article = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/articles", {
        headers: headers,
      });
      if (resp.data) {
        setview("articles");
        setstate(resp.data);
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  //_____________________________________________________________________
  const getcookie = (cookie) => {
    let index = Array.from(cookie).indexOf("=");
    let res = cookie.slice(index + 1);
    return res;
  };
  //______________________________________________________________________
  const filter = async (word) => {
    if (!word) {
      try {
        const resp = await axios.get("http://localhost:8080/home", {
          headers: headers,
        });
        setstate(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    } else {
      let x = state.filter((item) => {
        return item.title.includes(word) || item.body.includes(word);
      });
      setstate(x);
    }
  };

  //______________________________________________________________________
  const signup = async (creds) => {
    await axios.post("http://localhost:8080/signup", creds, {
      headers: headers,
    });
  };
  //________________________________________________________________________
  const login = async (creds) => {
    try {
      const resp = await axios.post("http://localhost:8080/login", creds, {
        headers: headers,
      });
      if (resp.data.token) {
        if (resp.data.isadmin) {
          Cookies.set("ad", true);
        }
        let toprint = JSON.parse(JSON.stringify(resp.data));
        document.cookie = `token  =  ${toprint.token} ; path=/`;
        setcookie(getcookie(document.cookie));
        Cookies.set("name", toprint.name);
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  //_______________________________________________________________________
  const news = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/home", {
        headers: headers,
      });
      if (resp.data) {
        setstate(resp.data);
        setview("news");
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }; //__________________________________________________________________
  const shownav = () => {
    if (cookie) {
      return (
        <Navbar
          add={add}
          switchadd={switchadd}
          admin={Cookies.get("ad")}
          toggle={toggled}
          profile={Cookies.get("name")}
          logout={logout}
          news={news}
          article={article}
        />
      );
    }
  };

  //____________________________________________________________________
  const switchadd = () => {
    setadd(!add);
  };
  //____________________________________________________________________
  const page = () => {
    if (Cookies.get("ad")) {
      return <Admin add={add} />;
    } else if (state && view === "news" && cookie) {
      if (state.length < 1) {
        return <Empty />;
      }
      let x = state.map((card, index) => {
        return (
          <Card
            imgurl={card.imgurl}
            key={index}
            author={card.author}
            title={card.title}
            body={card.body}
            admin={card.isadmin}
          />
        );
      });
      return x;
    } else if (state && view === "articles" && cookie) {
      if (state.length < 1) {
        return <Empty />;
      }
      let y = state.map((card, index) => {
        return (
          <Card
            imgurl={card.imgurl}
            key={index}
            author={card.author}
            title={card.title}
            body={card.body}
            admin={card.isadmin}
          />
        );
      });
      return y;
    } else {
      return <Login signup={signup} login={login} />;
    }
  };

  //____________________________________________________________________
  const toggled = () => {
    settoggle(!toggle);
  };

  const searchit = () => {
    if (toggle) {
      if (view === "articles" && cookie) {
        return <Search filter={filter} />;
      } else if (view === "news" && cookie) {
        return <Search filter={filter} />;
      }
    }
  };
  //---------------------------------------------------------------------
  const logout = () => {
    Cookies.remove("name");
    Cookies.remove("ad");
    setcookie("");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  //_____________________________________________________________________
  useEffect(async () => {
    if (document.cookie) {
      setcookie(getcookie(document.cookie));
    }
    try {
      const resp = await axios.get("http://localhost:8080/home", {
        headers: headers,
      });
      setstate(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, [cookie]);
  //-----------------------------------
  return (
    <div>
      {shownav()}
      <div> {searchit()}</div>
      <div className="cont">
        <div className="cardcont">{page()}</div>
      </div>
      {/* <div className="share">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fb"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tw"
        >
          Twitter
        </a>
      </div> */}
    </div>
  );
};

export default App;
