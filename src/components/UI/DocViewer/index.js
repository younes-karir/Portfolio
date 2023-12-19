import ReactDOM from "react-dom";
import { Container } from "./DocViewer.elements";
import Modal from "./animated/Modal";

const Data = () => {
  return (
    <Modal>
      <Container></Container>
    </Modal>
  );
};

const DocViewer = () => {
  return ReactDOM.createPortal(
    <Data />,
    document.getElementById("portal-root")
  );
};

export default DocViewer;
