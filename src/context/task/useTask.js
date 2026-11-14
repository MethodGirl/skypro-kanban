import { useContext } from "react";
import TaskContext from "./TaskContext";

export function useTask(){
    const context = useContext(TaskContext)

    if (!context) {
    throw new Error("Не получилось получить задачу");
  }
  return context;
}