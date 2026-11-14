import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useParams, useOutletContext } from "react-router-dom";
import { getTaskId } from "../services/api";
import { useEffect, useState } from "react";

const CardPage = () => {
  const { token } = useOutletContext();
  const [task, setTask] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const loadTask = async () => {
      const data = await getTaskId({ id, token });
      setTask(data.task);
    };

    loadTask();
  }, [id, token]);

  return <PopBrowse task={task} token={token} />;
};

export default CardPage;
