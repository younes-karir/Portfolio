import React, { useState } from "react";
import uk from "../../../Helpers/Images/uk.svg";
import {
  Container,
  Elements,
  Item,
  LanguageIcon,
  Row,
  Selected,
  SelectedItem,
} from "./DropList.elements";


export default function DropList() {
  return (
    <Container>
      
      <Elements>
        <Item value={"En"}>En</Item>
        <Item value={"Fr"}>Fr</Item>
        <Item value={"De"}>De</Item>
      </Elements>
    </Container>
  );
}
