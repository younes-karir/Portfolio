import ReactDOM from "react-dom";
import { Container, Eclips, Wrapper } from './Loader.elements';

const Data = () => {
  return (
    <Container>
        <Wrapper>
            <Eclips></Eclips>
            <Eclips></Eclips>
            <Eclips></Eclips>
        </Wrapper>
    </Container>
  )
}


const Loader = () => {
    return ReactDOM.createPortal(
      <Data />,
      document.getElementById("portal-root")
    );
  };

export default Loader