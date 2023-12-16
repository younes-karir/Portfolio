import React, { useEffect, useState } from "react";
import en from "../../../Helpers/Images/uk.svg";
import fr from "../../../Helpers/Images/fr.svg";
import de from "../../../Helpers/Images/de.svg";

import {
  Container,
  Elements,
  ImgHolder,
  Item,
  LanguageIcon,
  Row,
  Selected,
  SelectedItem,
  Text,
} from "./DropList.elements";
import { useDispatch, useSelector } from "react-redux";

import i18n from "../../../Helpers/i18next/i18n";
import Loader from "../Loader";
import { ChangeLanguage } from "../../../Store/actions/UI-Actions";
import En from "../../../Helpers/Icons/En";
import Fr from "../../../Helpers/Icons/Fr";
import De from "../../../Helpers/Icons/De";

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
          <Item onClick={() => ChangeHandler("en")}><En size={'1.2rem'}/><Text>English</Text></Item>
          <Item onClick={() => ChangeHandler("fr")}><Fr size={'1.2rem'}/><Text>Francais</Text></Item>
          <Item onClick={() => ChangeHandler("de")}><De size={'1.2rem'}/><Text>Deutsch</Text></Item>
        </Elements>
      )}
    </Container>
  );
}
