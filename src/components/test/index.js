import { useState } from "react";
import { Container } from "./Test.elemets";



const Test = () => {
    const [first, setfirst] = useState();

    const width = '12px';

  return (
    <Container  $width = {width}>
        {first}
    </Container>
  )
}

export default Test;