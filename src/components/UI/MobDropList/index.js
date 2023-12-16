import { useEffect, useState } from "react";
import {
  Container,
  HeaderIcon,
  Item,
  ListHeader,
  ListeContent,
  SelectedItem,
  Text,
} from "./MobDropList.elements";
import De from "../../../Helpers/Icons/De";
import En from "../../../Helpers/Icons/En";
import Fr from "../../../Helpers/Icons/Fr";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import i18n from "../../../Helpers/i18next/i18n";
import { ChangeLanguage } from "../../../Store/actions/UI-Actions";

export default function MobDropList() {
  const dispatch = useDispatch();
  const [Drop, setDrop] = useState(false);
  const acteul = useSelector((state) => state.language.acteul);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const OpenHandler = () => {
    setDrop(!Drop);
  };

  const ChangeHandler = (value) => {
    setDrop(false);
    setTimeLeft(2);
    i18n.changeLanguage(value);
    dispatch(ChangeLanguage(value));
  };

  return (
    <Container>
      {timeLeft > 0 && <Loader />}
      <ListHeader onClick={OpenHandler} $opened={Drop}>
        {acteul === "en" ? (
          <SelectedItem>
            <En size={"1.6rem"} /> <Text>English</Text>
          </SelectedItem>
        ) : acteul === "fr" ? (
          <SelectedItem>
            <Fr size={"1.6rem"} /> <Text>Francais</Text>
          </SelectedItem>
        ) : (
          <SelectedItem>
            <De size={"1.6rem"} /> <Text>Deutsch</Text>
          </SelectedItem>
        )}
        <HeaderIcon $flip={Drop} />
      </ListHeader>
      {Drop && (
        <ListeContent $opened={Drop}>
          <Item
            onClick={() => {
              if (acteul !== "en") ChangeHandler("en");
            }}
            $selected={acteul === "en"}
          >
            <En size={"1.6rem"} />
            English
          </Item>
          <Item
            onClick={() => {
              if (acteul !== "fr") ChangeHandler("fr");
            }}
            $selected={acteul === "fr"}
          >
            <Fr size={"1.6rem"} />
            Francais
          </Item>
          <Item
            onClick={() => {
              if (acteul !== "de") ChangeHandler("de");
            }}
            $selected={acteul === "de"}
          >
            <De size={"1.6rem"} />
            Deutsch
          </Item>
        </ListeContent>
      )}
    </Container>
  );
}
