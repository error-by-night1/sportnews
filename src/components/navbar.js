import React from "react";
import logo from "./logo.png";

//-----------------------------------------------------------------------
const Navbar = ({
  article,
  news,
  logout,
  profile,
  toggle,
  admin,
  switchadd,
  add,
}) => {
  //-----------------------------------
  const profname = () => {
    if (profile) {
      return (
        <li>
          <a>{profile}</a>
        </li>
      );
    }
  };
  //___________________________________
  const showsearch = (a) => {
    if (!a) {
      return (
        <ul className="nav-links">
          <li>
            <a onClick={() => news()}>news</a>
          </li>
          <li>
            <a onClick={() => article()}>articles</a>
          </li>
          <li>
            <a onClick={() => logout()}>logout</a>
          </li>
          <li>
            <a onClick={() => toggle()}>search</a>
          </li>

          {profname()}
        </ul>
      );
    } else if (a) {
      return (
        <ul className="nav-links">
          <li>
            <a onClick={() => logout()}>logout</a>
          </li>
          <li>
            <a onClick={() => switchadd()}>{add ? "delete" : "add"}</a>
          </li>
          {profname()}
        </ul>
      );
    }
  };
  //-----------------------------------
  return (
    <nav className="nav-wrapper-flex">
      <img src={logo} width="100px"></img>
      <i className="material-icons" id="mobile-menu"></i>
      {showsearch(admin)}
    </nav>
  );
};
export default Navbar;
