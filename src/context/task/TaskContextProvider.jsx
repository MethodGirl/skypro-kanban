import { fetchTasks } from "../../services/api.js";
import TaskContext from "./TaskContext";
import { useCallback, useState } from "react";
import { TOKEN } from "../../constants.js"

export function TaskContextProvider({ children }) {
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        isLoading,
        error,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
