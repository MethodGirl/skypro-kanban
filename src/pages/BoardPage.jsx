import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import { fetchTasks } from "../services/api.js";

const TOKEN = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

const BoardPage = ({ setIsAuth }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setError("");

      const data = await fetchTasks({ token: TOKEN });

      if (data) {
        setTasks(data.tasks);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(() => {
      getTasks();
    });
  }, [getTasks]);

  return (
    <>
      <Wrapper>
        <Header setIsAuth={setIsAuth} onTaskAdded={getTasks} token={TOKEN} />

        <Main tasks={tasks} isLoading={isLoading} error={error} />
      </Wrapper>

      <Outlet context={{ token: TOKEN, getTasks }} />
    </>
  );
};

export default BoardPage;
