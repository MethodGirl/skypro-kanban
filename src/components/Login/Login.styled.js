import styled from "styled-components";
import { Hover01 } from "../../styles/Common.styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ $theme }) => {
    return $theme === "light" ? "#eaeef6" : "#151419";
  }};
`;

export const ContainerSignIn = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    & {
      background-color: none
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ $theme }) =>
    $theme === "light" ? "#ffffff" : "#20202C"};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: ${({ $theme }) =>
    $theme === "light" ? " 0.7px solid #d4dbe5" : " 0.7px solid #4E5566"};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    & {
      max-width: 368px;
      width: 100%;
      padding: 0 16px;
      border-radius: none;
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

export const ModalTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color: ${({ $theme }) => ($theme === "light" ? "#000" : "#fff")};
  }
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:last-of-type {
    margin-bottom: 0;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;

  -webkit-appearance: none;
  appearance: none;

  background-color: ${({ $theme }) =>
    $theme === "light" ? "#ffffff" : "#20202C"};

  border: ${({ $error }) =>
    $error ? "1px solid #F84D4D" : "0.7px solid rgba(148, 166, 190, 0.4)"};

  color: ${({ $theme }) => ($theme === "light" ? "#000000" : "#94a6be")};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px
      ${({ $theme }) => ($theme === "light" ? "#ffffff" : "#20202C")} inset !important;

    -webkit-text-fill-color: ${({ $theme }) =>
      $theme === "light" ? "#000000" : "#94a6be"};

    transition: background-color 9999s ease-in-out 0s;
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const ModalBtnEnter = styled(Hover01)`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  ${({ $error }) =>
    $error &&
    `
background-color: #94A6BE;
`}

  @media screen and (max-width: 375px) {
    & {
      height: 40px;
    }
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 0;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;

export const PopUserSet = styled.div``;
