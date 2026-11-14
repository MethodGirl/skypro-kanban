import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import Loader from "../Loader/Loader";
import { putTask, deleteTask } from "../../services/api";
import { useTask } from "../../context/task/useTask";
import { useTheme } from "../../context/theme/useTheme.js";

import {
  PopBrowseWrapper,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  TopicBadge,
  TopicText,
  StatusSection,
  StatusLabel,
  StatusList,
  StatusButton,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseLabel,
  FormBrowseTextarea,
  CalendarWrap,
  ErrorMessage,
  BrowseActions,
  ButtonGroup,
  ActionButton,
  SaveButton,
  CloseButton,
} from "./PopBrowse.styled.js";

const PopBrowse = ({ task, token }) => {
  const navigate = useNavigate();
  const { getTasks } = useTask();
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (!task) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [task]);

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

      await getTasks();
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

  const handleStatus = (event) => {
    const newStatus = event.currentTarget.textContent;
    updateField("status", newStatus);
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    await deleteTask({ id: task._id, token });
    await getTasks();

    navigate("/");
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const currentTopic = isEditing ? formData.topic : task.topic;
  const currentStatus = isEditing ? formData.status : task.status;

  return (
    <PopBrowseWrapper>
      <PopBrowseContainer $theme={theme}>
        <PopBrowseBlock $theme={theme}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle $theme={theme}>
                {isEditing ? formData.title : task.title}
              </PopBrowseTitle>

              <TopicBadge $topic={currentTopic} $theme={theme}>
                <TopicText>{currentTopic}</TopicText>
              </TopicBadge>
            </PopBrowseTopBlock>

            <StatusSection>
              <StatusLabel $theme={theme}>Статус</StatusLabel>

              <StatusList>
                {!isEditing ? (
                  <StatusButton type="button" $theme={theme} $active>
                    {currentStatus}
                  </StatusButton>
                ) : (
                  statuses.map((status) => (
                    <StatusButton
                      $theme={theme}
                      key={status}
                      type="button"
                      $active={formData.status === status}
                      onClick={handleStatus}
                    >
                      {status}
                    </StatusButton>
                  ))
                )}
              </StatusList>
            </StatusSection>

            <PopBrowseWrap>
              <PopBrowseForm
                id="formBrowseCard"
                onSubmit={(event) => event.preventDefault()}
              >
                <FormBrowseBlock>
                  <FormBrowseLabel $theme={theme} htmlFor="textArea01">
                    Описание задачи
                  </FormBrowseLabel>

                  <FormBrowseTextarea
                    $isEditing={isEditing}
                    $theme={theme}
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
                </FormBrowseBlock>
              </PopBrowseForm>

              <CalendarWrap>
                <Calendar
                  date={isEditing ? formData.date : task.date}
                  isEditable={isEditing}
                  onDateChange={(date) => updateField("date", date)}
                />
              </CalendarWrap>
            </PopBrowseWrap>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {!isEditing ? (
              <BrowseActions>
                <ButtonGroup>
                  <ActionButton
                    type="button"
                    onClick={handleEdit}
                    $theme={theme}
                  >
                    Редактировать задачу
                  </ActionButton>

                  <ActionButton
                    type="button"
                    onClick={handleDelete}
                    $theme={theme}
                  >
                    Удалить задачу
                  </ActionButton>

                  <CloseButton
                    type="button"
                    onClick={handleClose}
                    $theme={theme}
                  >
                    Закрыть
                  </CloseButton>
                </ButtonGroup>
              </BrowseActions>
            ) : (
              <BrowseActions>
                <ButtonGroup>
                  <SaveButton
                    $isEditing={isEditing}
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    $theme={theme}
                  >
                    {isSaving ? "Сохранение..." : "Сохранить"}
                  </SaveButton>

                  <ActionButton
                    type="button"
                    $theme={theme}
                    onClick={handleCancel}
                    disabled={isSaving}
                  >
                    Отменить
                  </ActionButton>

                  <ActionButton
                    $theme={theme}
                    type="button"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </ActionButton>

                  <CloseButton
                    $isEditing={isEditing}
                    $theme={theme}
                    type="button"
                    onClick={handleClose}
                  >
                    Закрыть
                  </CloseButton>
                </ButtonGroup>
              </BrowseActions>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;
