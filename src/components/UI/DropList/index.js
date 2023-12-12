import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import i18n from "../../../Helpers/i18next/i18n";
import Loader from "../Loader";
import { ChangeLanguage } from "../../../Store/actions/UI-Actions";

export default function DropList() {
  const dispatch = useDispatch();
  const [Drop, setDrop] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const acteul = useSelector(state => state.language.acteul);

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
    // setSelectedLanguage(value);
    i18n.changeLanguage(value);
    dispatch(ChangeLanguage(value));
  };

  return (
    <Container>
      {timeLeft > 0 && <Loader />}
      <Selected onClick={DropTggle}>
        {/* <SelectedItem>{acteul}</SelectedItem> */}
        <LanguageIcon />
        {/* <Row $flip={!Drop} /> */}
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
