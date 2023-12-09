import { useDispatch, useSelector } from "react-redux";
import { Toggle ,Container } from "./ThemeSwitch.elements";
import {
  ThemeToggleDark,
  ThemeToggleLight,
} from "../../../Store/actions/UI-Actions";

const ThemingMob = () => {
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
      <Toggle onClick={thiming.title === "dark" ? LightHandler : DarkHandler} />
    </Container>
  );
};

export default ThemingMob;
