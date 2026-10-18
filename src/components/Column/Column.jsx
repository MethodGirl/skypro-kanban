import Card from "../Card/Card";
import { tasks } from "../../tasks";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";

const Column = (props) => {
  const { condition } = props;

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
