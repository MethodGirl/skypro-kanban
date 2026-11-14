import { styled, css } from "styled-components";

export const PopBrowseWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-width: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) =>
    $theme === "light" ? "rgb(129 126 126 / 95%)" : "rgba(0, 0, 0, 0.95)"};

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ $theme }) =>
    $theme === "light" ? "#ffffff" : "#20202C"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: ${({ $theme }) =>
    $theme === "light" ? "0.7px solid #d4dbe5" : "0.7px solid #4E5566"};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const TopicBadge = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  white-space: nowrap;

  ${({ $topic, $theme }) => {
    switch ($topic) {
      case "Research":
        return css`
          background-color: ${$theme === "dark" ? "#06B16E" : "#B4FDD1"};
          color: ${$theme === "dark" ? "#ffffff" : "#06B16E"};
        `;

      case "Copywriting":
        return css`
          background-color: ${$theme === "dark" ? "#9A48F1" : "#E9D4FF"};
          color: ${$theme === "dark" ? "#ffffff" : "#9A48F1"};
        `;

      case "Web Design":
        return css`
          background-color: ${$theme === "dark" ? "#FF6D00" : "#FFE4C2"};
          color: ${$theme === "dark" ? "#ffffff" : "#FF6D00"};
        `;
    }
  }}
`;

export const TopicText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const StatusSection = styled.div`
  margin-bottom: 11px;
`;

export const StatusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusLabel = styled.p`
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
`;

export const StatusButton = styled.button`
  border-radius: 24px;

  border: ${({ $active }) =>
    $active ? "none" : "0.7px solid rgba(148, 166, 190, 0.4)"};

  background: ${({ $active }) => ($active ? "#94a6be" : "transparent")};

  color: ${({ $active, $theme }) => {
    if ($theme === "dark") {
      return $active ? "#151419" : "#94A6BE";
    }

    return $active ? "#ffffff" : "#94a6be";
  }};

  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
`;

export const FormBrowseTextarea = styled.textarea`
  box-sizing: border-box;
  max-width: 370px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  resize: none;
  scrollbar-width: none;
  margin-top: 14px;
  outline: none;
  padding: 7px;
  background-color: ${({ $theme }) =>
    $theme === "light" ? "#eaeef6" : "#20202C"};
  color: ${({ $theme }) => ($theme === "light" ? "#000000" : "#94a6be")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.14px;

  ${({ $isEditing }) =>
    $isEditing &&
    css`
      background-color: transparent;
    `}

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
    font-size: 16px;
  }
`;
export const CalendarWrap = styled.div`
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  color: #e53935;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const BrowseActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  height: 30px;
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  color: ${({ $theme }) => ($theme === "light" ? "#565eef" : "#fff")};

  background-color: transparent;

  border: ${({ $theme }) =>
    $theme === "light" ? "0.7px solid #565eef" : "0.7px solid #fff"};

  color: ${({ $theme }) => ($theme === "light" ? " #565eef" : "#fff")};

  &:hover {
    background: #565eef;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-left: 0;
  }
`;

export const OtherButton = styled.button`
  background: #565eef;
  color: #ffffff;
  border: none;
  height: 30px;
  font-size: 14px;
  font-weight: 500px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-left: 0;
  }
`;

export const SaveButton = styled(OtherButton)`
  @media screen and (max-width: 495px) {
    width: 100%;

    ${({ $isEditing }) =>
      $isEditing &&
      css`
        order: -2;
      `}
  }
`;

export const CloseButton = styled(OtherButton)`
  margin-left: auto;

  @media screen and (max-width: 495px) {
    width: 100%;
    ${({ $isEditing }) =>
      $isEditing &&
      css`
        order: -1;
      `}
  }
`;
