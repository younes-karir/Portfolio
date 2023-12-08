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
  const [timeLeft, setTimeLeft] = useState(0);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (!headerShow) {
      if (scrollPosition > 40) dispatch(HeaderOn());
    } else {
      if (scrollPosition < 40) dispatch(HeaderOff());
    }
  }, [scrollPosition, headerShow, dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Content />
      {timeLeft > 0 && <Loader />}
    </Fragment>
  );
}

export default App;
