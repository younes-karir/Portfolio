import { Fragment, useEffect, useState } from "react";
import GlobalStyle from "./Helpers/GlobalStyle";
import Content from "./components/Content";
import Loader from "./components/UI/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HeaderOff, HeaderOn } from "./Store/actions/UI-Actions";
import useScrollPosition from "./Helpers/Hooks/useScrollPosition";

function App() {
  const headerShow = useSelector((state) => state.UI.headerShow);

  const dispatch = useDispatch();

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (!headerShow) {
      if (scrollPosition > 80) dispatch(HeaderOn());
    } else {
      if (scrollPosition < 80) dispatch(HeaderOff());
    }
  }, [scrollPosition, headerShow, dispatch]);

  return (
    <Fragment>
      <GlobalStyle $hide={headerShow} />
      <Content />
    </Fragment>
  );
}

export default App;
