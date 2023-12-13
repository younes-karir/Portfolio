import { useState } from "react";
import {
  Container,
  HeaderIcon,
  HeaderTitle,
  ListHeader,
  ListeContent,
} from "./MobDropList.elements";
import Radio from "./Radio";

export default function MobDropList() {
  const [Drop, setDrop] = useState(false);

  const OpenHandler = () => {
    setDrop(!Drop);
  };

  return (
    <Container $opened={Drop}>
      <ListHeader onClick={OpenHandler} $opened={Drop}>
        <HeaderTitle>Language</HeaderTitle>
        <HeaderIcon $flip={Drop} />
      </ListHeader>
      {Drop && (
        <ListeContent>
          <Radio selected={false} >English</Radio>
          <Radio selected={true} >Francais</Radio>
          <Radio selected={false} >Deutsch</Radio>
        </ListeContent>
      )}
    </Container>
  );
}
