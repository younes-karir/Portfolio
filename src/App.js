import { Fragment, useEffect } from "react";
import GlobalStyle from "./Helpers/GlobalStyle";
import Content from "./components/Content";
import Loader from "./components/UI/Loader";
import { useDispatch } from "react-redux";
import { HeaderOff, HeaderOn } from "./Store/actions/UI-Actions";
import useScrollPosition from "./Helpers/Hooks/useScrollPosition";

function App() {
  const dispatch = useDispatch();

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition < 40) {
      dispatch(HeaderOff());
    } else {
      dispatch(HeaderOn());
    }
  }, [scrollPosition,dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Content />
      {/* <Loader /> */}
    </Fragment>
  );
}

export default App;
