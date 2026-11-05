import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { postTask } from "../../services/api.js";

const PopNewCard = ({ onClose, onTaskAdded, token }) => {
  const [formData, setFormData] = useState({
    title: "Новая задача",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: new Date().toISOString(),
  });

  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const task = {
      title: formData.title.trim() || "Новая задача",
      description: formData.description,
      topic: formData.topic || "Research",
      status: formData.status || "Без статуса",
      date: formData.date || new Date().toISOString(),
    };

    try {
      setIsSending(true);
      setError("");

      await postTask({ task, token });

      await onTaskAdded();

      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pop-new-card" onClick={onClose}>
      <div
        className="pop-new-card__container"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button
              type="button"
              className="pop-new-card__close"
              onClick={onClose}
            >
              &#10006;
            </button>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    value={formData.title}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={(event) =>
                      setFormData({ ...formData, title: event.target.value })
                    }
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    value={formData.description}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        description: event.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </form>
              <Calendar
                isCreating={true}
                date={formData.date}
                onDateChange={(date) =>
                  setFormData((prev) => ({ ...prev, date }))
                }
              />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${
                    formData.topic === "Web Design" ? "_active-category" : ""
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, topic: "Web Design" });
                  }}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${
                    formData.topic === "Research" ? "_active-category" : ""
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, topic: "Research" });
                  }}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${
                    formData.topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, topic: "Copywriting" });
                  }}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            {error && <p>{error}</p>}
            <button
              type="submit"
              form="formNewCard"
              className="form-new__create _hover01"
              id="btnCreate"
              disabled={isSending}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
