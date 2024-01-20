import ReactDOM from "react-dom/client";
import App from "./App";
import StoreProvider from './Store/StoreProvider';
import Theme from "./Helpers/Theme";
import "./Helpers/i18next/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <Theme>
      <App />
    </Theme>
  </StoreProvider>
);
