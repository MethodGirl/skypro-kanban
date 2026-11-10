import { useTheme } from "../../context/theme/useTheme.js";
import Card from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";
import { useNavigate } from "react-router-dom";

const Column = (props) => {
  const { condition, tasks } = props;
  const navigate = useNavigate();
  const {theme} = useTheme()

  const handleShowCard = (id) => {
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
              data-theme={theme}
              onClick={() => handleShowCard(task._id)}
              key={task._id}
              id={task._id}
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
