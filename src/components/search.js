import React from "react";
const { useState } = require("react");
//-----------------------------------------------------------------------
const Search = ({ filter }) => {
  //_____________________________________________________________________
  const [word, setword] = useState();
  //______________________________________________________________________

  return (
    <div className="search-container">
      <input
        onChange={(e) => {
          setword(e.target.value);
        }}
        type="text"
        id="search-bar"
        placeholder="What can I help you with today?"
      />
      <button onClick={() => filter(word)} className="sbmbut" type="submit">
        search
      </button>
    </div>
  );
};
export default Search;
