import React from "react";
import { Dropdown } from "semantic-ui-react";

const Options = [
  {
    key: "article",
    text: "article",
    value: "article",
  },
  {
    key: "news",
    text: "news",
    value: "news",
  },
];

const DropdownM = ({ set }) => (
  <Dropdown
    onChange={(e, { value }) => {
      set({ value });
    }}
    placeholder="Select type"
    fluid
    selection
    options={Options}
  />
);

export default DropdownM;
