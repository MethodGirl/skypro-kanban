
import { useTheme } from "../../context/theme/useTheme.js";
import Card from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";
import { useNavigate } from "react-router-dom";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

const Column = ({ condition, tasks, isLoading }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { ref } = useDroppable({
    id: `column-${condition}`,
    type: "column",
    accept: "task",
    collisionPriority: CollisionPriority.Low,
  });

  const handleShowCard = (id) => {
    navigate(`/card/${id}`);
  };

  const columnTasks = tasks.filter(
    (task) => task.status === condition
  );

  const placeholderCards = [
    {
      _id: `placeholder-${condition}-1`,
      title: "Название задачи",
      date: new Date().toISOString(),
      topic: "Research",
    },
    {
      _id: `placeholder-${condition}-2`,
      title: "Название задачи",
      date: new Date().toISOString(),
      topic: "Web Design",
    },
  ];

  const visibleTasks =
    isLoading && columnTasks.length === 0
      ? placeholderCards
      : columnTasks;

  return (
    <MainColumn ref={ref}>
      <ColumnTitle>
        <p>{condition}</p>
      </ColumnTitle>

      <Cards>
        {visibleTasks.map((task, index) => (
          <Card
            key={task._id}
            id={task._id}
            index={index}
            group={condition}
            data-theme={theme}
            onClick={() => handleShowCard(task._id)}
            title={task.title}
            date={task.date}
            topic={task.topic}
            isLoading={isLoading}
          />
        ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
