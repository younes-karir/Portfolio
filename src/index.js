import ReactDOM from "react-dom/client";
import App from "./App";
// import Theme from "./Helpers/Theme/index.js";
import StoreProvider from './Store/StoreProvider';
import Theme from "./Helpers/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <Theme>
      <App />
    </Theme>
  </StoreProvider>
);
