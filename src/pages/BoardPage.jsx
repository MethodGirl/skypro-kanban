import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import { TOKEN } from "../constants.js";
import { useTask } from "../context/task/useTask.js";
import { useTheme } from "../context/theme/useTheme.js";

const BoardPage = () => {
  const { getTasks } = useTask();
  const { theme } = useTheme();

  useEffect(() => {
    Promise.resolve().then(() => {
      getTasks();
    });
  }, [getTasks]);

  return (
    <>
      <Wrapper data-theme={theme}>
        <Header data-theme={theme} onTaskAdded={getTasks} token={TOKEN} />

        <Main data-theme={theme}/>
      </Wrapper>

      <Outlet context={{ token: TOKEN, getTasks }} />
    </>
  );
};

export default BoardPage;
