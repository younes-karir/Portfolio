import { useDispatch, useSelector } from "react-redux";
import { Container, Toggle } from "./Theming.elements";
import {
  ThemeToggleDark,
  ThemeToggleLight,
} from "../../../Store/actions/UI-Actions";

const Theming = (props) => {
  const thiming = useSelector((state) => state.theme.Theme);
  const dispatch = useDispatch();

  const LightHandler = () => {
    dispatch(ThemeToggleLight());
  };

  const DarkHandler = () => {
    dispatch(ThemeToggleDark());
  };

  return (
    <Container>
      <Toggle $size={props.size} onClick={thiming.title === "dark" ? LightHandler : DarkHandler} />
    </Container>
  );
};

export default Theming;
