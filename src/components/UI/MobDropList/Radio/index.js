import React from "react";
import { LNIcon, Label } from "./Radio.elements";

const Radio = (props) => {
  return (
    <Label $selected ={props.selected}>
      <LNIcon />
      {props.children}
    </Label>
  );
};

export default Radio;
