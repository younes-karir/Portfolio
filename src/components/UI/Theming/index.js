import { Container } from "./Theming.elements";

import AnimatedIcon from "./AnnimatedIcon";

const Theming = (props) => {
  return (
    <Container>
      <AnimatedIcon size={props.size} />
    </Container>
  );
};

export default Theming;
