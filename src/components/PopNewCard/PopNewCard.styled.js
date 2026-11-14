import { styled, css } from "styled-components";

export const PopNewCardWrapper = styled.div`
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

export const PopNewCardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.95);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ $theme }) =>
    $theme === "light" ? "#ffffff" : "#20202C"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
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

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    color: black;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#94A6BE")};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    &::placeholder {
      color: #94a6be;
    }
    letter-spacing: -0.14px;
  }

  margin: 20px 0;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  max-width: 370px;
  height: 200px;
  margin-top: 14px;
  outline: none;
  padding: 20px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#94A6BE")};

 overflow: hidden;
  resize: none;
  scrollbar-width: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    padding-top: 10px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Category = styled.button`
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  border: none;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  ${({ $topic, $theme }) => {
    switch ($topic) {
      case "Research":
        return css`
          background-color: ${$theme === "dark" ? "#06B16E" : "#B4FDD1"};
          color: ${$theme === "dark" ? "#B4FDD1" : "#06B16E"};
        `;

      case "Copywriting":
        return css`
          background-color: ${$theme === "dark" ? "#9A48F1" : "#E9D4FF"};
          color: ${$theme === "dark" ? "#E9D4FF" : "#9A48F1"};
        `;

      case "Web Design":
        return css`
          background-color: ${$theme === "dark" ? "#FF6D00" : "#FFE4C2"};
          color: ${$theme === "dark" ? "#FFE4C2" : "#FF6D00"};
        `;
    }
  }}

  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const PopNewCardSubmit = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
