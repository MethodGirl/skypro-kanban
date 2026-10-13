import Card from "../Card/Card";
import { tasks } from "../../tasks";

const Column = (props) => {
  const { condition } = props;

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{condition}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
};

export default Column;
