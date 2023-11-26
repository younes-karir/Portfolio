import { Fragment, useEffect, useState } from "react";
import GlobalStyle from "./Helpers/GlobalStyle";
import Content from "./components/Content";
import Loader from "./components/UI/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HeaderOff, HeaderOn } from "./Store/actions/UI-Actions";
import useScrollPosition from "./Helpers/Hooks/useScrollPosition";

function App() {
  const thiming = useSelector((state) => state.theme.Theme);

  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(0);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition < 40) {
      dispatch(HeaderOff());
    } else {
      dispatch(HeaderOn());
    }
  }, [scrollPosition,thiming,dispatch]);


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
