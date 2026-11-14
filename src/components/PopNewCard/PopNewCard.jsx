import { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { postTask } from "../../services/api.js";
import { useTask } from "../../context/task/useTask.js";
import {
  PopNewCardWrapper,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardWrap,
  PopNewCardForm,
  PopNewCardSubmit,
  FormBlock,
  FormLabel,
  FormInput,
  FormTextarea,
  Categories,
  CategoriesTitle,
  CategoriesList,
  Category,
} from "./PopNewCard.styled.js";
import { useTheme } from "../../context/theme/useTheme.js";

const PopNewCard = ({ onClose, token }) => {
  const { getTasks } = useTask();
  const { theme } = useTheme();

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

      await getTasks();

      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <PopNewCardWrapper onClick={onClose}>
      <PopNewCardContainer onClick={(event) => event.stopPropagation()}>
        <PopNewCardBlock $theme={theme}>
          <PopNewCardContent>
            <PopNewCardTitle $theme={theme}>Создание задачи</PopNewCardTitle>
            <PopNewCardClose type="button" onClick={onClose}>
              &#10006;
            </PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
                <FormBlock>
                  <FormLabel htmlFor="formTitle" $theme={theme}>
                    {" "}
                    Название задачи
                  </FormLabel>
                  <FormInput
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
                </FormBlock>
                <FormBlock>
                  <FormLabel htmlFor="textArea" $theme={theme}>
                    Описание задачи
                  </FormLabel>
                  <FormTextarea
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
                  />
                </FormBlock>
              </PopNewCardForm>
              <Calendar
                isCreating={true}
                date={formData.date}
                onDateChange={(date) =>
                  setFormData((prev) => ({ ...prev, date }))
                }
              />
            </PopNewCardWrap>
            <Categories>
              <CategoriesTitle $theme={theme}>Категория</CategoriesTitle>

              <CategoriesList>
                <Category
                  type="button"
                  $topic="Web Design"
                  $theme={theme}
                  $active={formData.topic === "Web Design"}
                  onClick={() =>
                    setFormData({ ...formData, topic: "Web Design" })
                  }
                >
                  Web Design
                </Category>

                <Category
                  type="button"
                  $topic="Research"
                  $theme={theme}
                  $active={formData.topic === "Research"}
                  onClick={() =>
                    setFormData({ ...formData, topic: "Research" })
                  }
                >
                  Research
                </Category>

                <Category
                  type="button"
                  $theme={theme}
                  $topic="Copywriting"
                  $active={formData.topic === "Copywriting"}
                  onClick={() =>
                    setFormData({ ...formData, topic: "Copywriting" })
                  }
                >
                  Copywriting
                </Category>
              </CategoriesList>
            </Categories>
            {error && <p>{error}</p>}
            <PopNewCardSubmit
              type="submit"
              form="formNewCard"
              id="btnCreate"
              disabled={isSending}
            >
              Создать задачу
            </PopNewCardSubmit>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardWrapper>
  );
};

export default PopNewCard;
