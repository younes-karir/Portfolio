import { useState } from "react";
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

export default function MobDropList() {
  const [Drop, setDrop] = useState(false);

  const OpenHandler = () => {
    setDrop(!Drop);
  };

  return (
    <Container>
      <ListHeader onClick={OpenHandler} $opened={Drop}>
      <SelectedItem>
         <En size={'1.6rem'}/>      <Text>English</Text>
      </SelectedItem>
      <HeaderIcon $flip={Drop} />
      </ListHeader>
      {Drop && (
        <ListeContent $opened={Drop}>
          <Item ><En size={'1.6rem'}/>English</Item>
          <Item ><Fr size={'1.6rem'}/>Francais</Item>
          <Item ><De size={'1.6rem'}/>Deutsch</Item>
        </ListeContent>
      )}
    </Container>
  );
}
