import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Loader from "../Loader/Loader";
import { putTask, deleteTask } from "../../services/api";
import { useState } from "react";

const PopBrowse = ({ task, token, onTaskUpdated }) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(null);

  const handleClose = () => {
    navigate("/");
  };

  const handleEdit = () => {
    setFormData({
      title: task.title || "",
      description: task.description || "",
      topic: task.topic || "Research",
      status: task.status || "Без статуса",
      date: task.date || new Date().toISOString(),
    });

    setError("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({
      title: task.title || "",
      description: task.description || "",
      topic: task.topic || "Research",
      status: task.status || "Без статуса",
      date: task.date || new Date().toISOString(),
    });

    setError("");
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError("");

      const updatedTask = {
        title: formData.title,
        description: formData.description,
        topic: formData.topic,
        status: formData.status,
        date: formData.date,
      };

      await putTask({
        id: task._id,
        task: updatedTask,
        token,
      });

      await onTaskUpdated();
      navigate("/");
    } catch (error) {
      setError(error.message || "Не удалось сохранить задачу");
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!task) {
    return <Loader />;
  }

  const topicClass =
    task?.topic === "Copywriting"
      ? "_purple"
      : task?.topic === "Research"
        ? "_green"
        : "_orange";

  const currentTopicClass =
    formData?.topic === "Copywriting"
      ? "_purple"
      : formData?.topic === "Research"
        ? "_green"
        : "_orange";

  const handleStatus = (event) => {
    event.preventDefault();

    const newStatus = event.target.textContent;

    setFormData((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    await deleteTask({ id: task._id, token });

    await onTaskUpdated();

    navigate("/");
  };

  return (
    <div className="pop-browse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {isEditing ? formData.title : task.title}
              </h3>

              <div
                className={`categories__theme theme-top ${
                  isEditing ? currentTopicClass : topicClass
                } _active-category`}
              >
                <p className={isEditing ? currentTopicClass : topicClass}>
                  {isEditing ? formData.topic : task.topic}
                </p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {!isEditing ? (
                  <div className="status__theme _gray">
                    <p className="_gray">
                      {isEditing ? formData.status : task.status}
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      className={`status__theme ${formData.status === "Без статуса" ? "_gray" : ""}`}
                      type="button"
                      onClick={(e) => {
                        handleStatus(e);
                      }}
                    >
                      <p>Без статуса</p>
                    </div>
                    <div
                      className={`status__theme ${formData.status === "Нужно сделать" ? "_gray" : ""}`}
                      type="button"
                      onClick={(e) => {
                        handleStatus(e);
                      }}
                    >
                      <p>Нужно сделать</p>
                    </div>
                    <div
                      className={`status__theme ${formData.status === "В работе" ? "_gray" : ""}`}
                      type="button"
                      onClick={(e) => {
                        handleStatus(e);
                      }}
                    >
                      <p>В работе</p>
                    </div>
                    <div
                      className={`status__theme ${formData.status === "Тестирование" ? "_gray" : ""}`}
                      type="button"
                      onClick={(e) => {
                        handleStatus(e);
                      }}
                    >
                      <p>Тестирование</p>
                    </div>
                    <div
                      className={`status__theme ${formData.status === "Готово" ? "_gray" : ""}`}
                      type="button"
                      onClick={(e) => {
                        handleStatus(e);
                      }}
                    >
                      <p>Готово</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>

                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={
                      isEditing ? formData.description : task.description || ""
                    }
                    onChange={(event) =>
                      updateField("description", event.target.value)
                    }
                  />
                </div>
              </form>

              <Calendar
                date={isEditing ? formData.date : task.date}
                isEditable={isEditing}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            {!isEditing ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={handleEdit}
                  >
                    Редактировать задачу
                  </button>

                  <button
                    type="button"
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? "Сохранение..." : "Сохранить"}
                  </button>

                  <button
                    type="button"
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancel}
                    disabled={isSaving}
                  >
                    Отменить
                  </button>

                  <button
                    type="button"
                    className="btn-edit__delete _btn-bor _hover03"
                    onClick={handleClose}
                  >
                    Удалить задачу
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
