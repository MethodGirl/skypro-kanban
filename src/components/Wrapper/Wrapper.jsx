import { useTheme } from "../../context/theme/useTheme.js";
import {Wrapper as OuterWrapper} from "./Wrapper.styled.js"

const Wrapper = ({ children }) => {
  const {theme} = useTheme()

  return <OuterWrapper $theme={theme}>{children}</OuterWrapper>;
};


export default Wrapper;
