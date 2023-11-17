import React from "react";
import { Container, MoreIcon, Wrapper } from "./MoreModal.elements";

const MoreModal = () => {
  return (
    <Container>
      <Wrapper>
        <span>See More</span>
        <MoreIcon />
      </Wrapper>
    </Container>
  );
};

export default MoreModal;
