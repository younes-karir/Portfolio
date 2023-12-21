import ReactDOM from "react-dom";
import { Container, Header } from "./DocViewer.elements";
import Modal from "./animated/Modal";

// Import the main component
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import DocResume from "../../../Helpers/Documents/resume.pdf";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const Data = () => {
  return (
    <Modal>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Header></Header>
        <Container>
          <Viewer fileUrl={DocResume} />
        </Container>
      </Worker>
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
