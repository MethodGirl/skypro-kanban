import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Wrapper from "../components/Wrapper/Wrapper.jsx";

const BoardPage = ({ setIsAuth }) => {
  return (
    <>
      <Wrapper>
        <Header setIsAuth={setIsAuth} />
        <Main />
      </Wrapper>
      <Outlet />
    </>
  );
};

export default BoardPage;
