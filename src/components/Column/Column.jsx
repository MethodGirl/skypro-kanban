import Card from "../Card/Card";
import { tasks } from "../../tasks";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";
import { useNavigate } from "react-router-dom";

const Column = (props) => {
  const { condition } = props;
  const navigate = useNavigate();

  const handleShowCard = (id) => {
  console.log("ID карточки:", id);
  navigate(`/card/${id}`);
};

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{condition}</p>
      </ColumnTitle>
      <Cards>
        {tasks
          .filter((task) => {
            return task.status === condition;
          })
          .map((task) => (
            <Card
              onClick={() => handleShowCard(task.id)}
              key={task.id}
              id={task.id}
              title={task.title}
              date={task.date}
              topic={task.topic}
            />
          ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
