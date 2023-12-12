import React, { useEffect, useState } from "react";
import uk from "../../../Helpers/Images/uk.svg";
import {
  Container,
  Elements,
  Item,
  Row,
  Selected,
  SelectedItem,
} from "./DropList.elements";
import { useDispatch } from "react-redux";

import i18n from "../../../Helpers/i18next/i18n";
import Loader from "../Loader";

export default function DropList() {
  const dispatch = useDispatch();
  const [Drop, setDrop] = useState(false);
  const [SelectedLanguage, setSelectedLanguage] = useState("en");
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  const DropTggle = () => {
    setDrop(!Drop);
  };

  const handleMouseOut = () => {
    setDrop(false);
  };

  const ChangeHandler = (value) => {
    setDrop(false);
    setTimeLeft(2)
    setSelectedLanguage(value);
    i18n.changeLanguage(value);

  };

  return (
    <Container>
      {timeLeft > 0 && <Loader />}
      <Selected onClick={DropTggle}>
        <SelectedItem>{SelectedLanguage}</SelectedItem>
        <Row $flip={!Drop} />
      </Selected>
      {Drop && (
        <Elements onMouseLeave={handleMouseOut}>
          <Item onClick={() => ChangeHandler("en")}>English</Item>
          <Item onClick={() => ChangeHandler("fr")}>Francais</Item>
          <Item onClick={() => ChangeHandler("de")}>Deutsch</Item>
        </Elements>
      )}
    </Container>
  );
}
