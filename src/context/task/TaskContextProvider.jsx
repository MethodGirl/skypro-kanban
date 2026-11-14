import { fetchTasks } from "../../services/api.js";
import TaskContext from "./TaskContext";
import { useCallback, useState } from "react";
import { TOKEN } from "../../constants.js";

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setError("");

      const data = await fetchTasks({ token: TOKEN });

      if (data) {
        const savedOrder = JSON.parse(
          localStorage.getItem("kanban-task-order") || "[]",
        );

        const orderMap = new Map(savedOrder.map((id, index) => [id, index]));

        const sortedTasks = [...data.tasks].sort((a, b) => {
          const indexA = orderMap.get(a._id) ?? Infinity;
          const indexB = orderMap.get(b._id) ?? Infinity;

          return indexA - indexB;
        });

        setTasks(sortedTasks);
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
