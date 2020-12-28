import React from "react";

//-----------------------------------------------------------------------
const Card = ({ title, body, author, imgurl }) => {
  //-----------------------------------
  return (
    <div className="grid">
      <div className="card card__body">
        <h1 className="tit">{title}</h1>
        <figure className="card__img">
          <img className="mainimg" alt="an img" src={imgurl} />
        </figure>
        <div className="card__desc">{body}</div>
        <h3>by:{author}</h3>
      </div>
    </div>
  );
};
export default Card;
