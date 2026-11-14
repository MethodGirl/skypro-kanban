import { useRef, useState } from "react";
import Column from "../Column/Column";
import { Main as MainWrapper, MainBlock, MainContent, ErrorMessage } from "./Main.styled.js";
import { Container } from "../../styles/Common.styled.js";
import GlobalStyles from "../../styles/GlobalStyles.js";
import { useTask } from "../../context/task/useTask.js";
import { useTheme } from "../../context/theme/useTheme.js";

import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

import { putTask } from "../../services/api.js";
import { TOKEN } from "../../constants.js";

const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const { tasks, setTasks, isLoading, error } = useTask();
  const { theme } = useTheme();

  const [saveError, setSaveError] = useState("");
  const tasksSnapshot = useRef([]);

  const handleDragStart = () => {
    tasksSnapshot.current = structuredClone(tasks);
  };

  const handleDragOver = (event) => {
    const { source } = event.operation;

    if (source?.type !== "task") return;

    setTasks((prevTasks) => {
      const groupedTasks = Object.fromEntries(
        STATUSES.map((status) => [
          status,
          prevTasks
            .filter((task) => task.status === status)
            .map((task) => task._id),
        ]),
      );

      const updatedGroups = move(groupedTasks, event);

      const tasksById = new Map(prevTasks.map((task) => [task._id, task]));

      return STATUSES.flatMap((status) =>
        (updatedGroups[status] || []).map((id) => {
          const task = tasksById.get(id);

          return task.status === status ? task : { ...task, status };
        }),
      );
    });
  };

  const handleDragEnd = async (event) => {
    if (event.canceled) {
      setTasks(tasksSnapshot.current);
      return;
    }

    const previousTasks = tasksSnapshot.current;

    const changedTasks = tasks.filter((task) => {
      const previousTask = previousTasks.find((item) => item._id === task._id);

      return previousTask && previousTask.status !== task.status;
    });

    try {
      setSaveError("");

      if (changedTasks.length > 0) {
        await Promise.all(
          changedTasks.map((task) =>
            putTask({
              id: task._id,
              token: TOKEN,
              task: {
                title: task.title,
                description: task.description,
                topic: task.topic,
                status: task.status,
                date: task.date,
              },
            }),
          ),
        );
      }

      localStorage.setItem(
        "kanban-task-order",
        JSON.stringify(tasks.map((task) => task._id)),
      );
    } catch (error) {
      setTasks(previousTasks);
      setSaveError(error.message);
    }
  };

  return (
    <>
      <GlobalStyles />

      <MainWrapper $theme={theme}>
        <Container>
          <MainBlock>
            {saveError && (
              <ErrorMessage $theme={theme}>
                Не удалось сохранить изменения. Попробуйте ещё раз.
              </ErrorMessage>
            )}

            {error ? (
              <ErrorMessage $theme={theme}>
                Не удалось загрузить задачи. Попробуйте обновить страницу.
              </ErrorMessage>
            ) : !isLoading && tasks.length === 0 ? (
              <p>Новых задач нет</p>
            ) : (
              <DragDropProvider
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
              >
                <MainContent>
                  {STATUSES.map((status) => (
                    <Column
                      key={status}
                      condition={status}
                      tasks={tasks}
                      isLoading={isLoading}
                    />
                  ))}
                </MainContent>
              </DragDropProvider>
            )}
          </MainBlock>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Main;
