import React from "react";
import { Container, Holder } from "./TechItem.elements";

const TechItem = ({children}) => {
  return (
    <Container>
      <Holder>{children}</Holder>
    </Container>
  );
};

export default TechItem;
