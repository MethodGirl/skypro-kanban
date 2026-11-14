import styled from "styled-components";
import { Hover01, Hover03 } from "../../styles/Common.styled";

export const PopExit = styled.div`
  display: ${({ $state }) => ($state === "open" ? "block" : "none")};
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) =>
    $theme === "light" ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.83)"};
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background: ${({ $theme }) => ($theme === "light" ? "#ffffff" : "#20202C")};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: ${({ $theme }) =>
    $theme === "light" ? "0.7px solid #d4dbe5" : "0.7px solid #4E5566"};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    & {
      padding: 50px 20px;
    }
  }
`;

export const PopExitTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: ${({ $theme }) => ($theme === "light" ? "#000000" : "#FFFFFF")};
  }
`;

export const PopExitYes = styled(Hover01)`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ $theme }) => ($theme === "light" ? "#FFFFFF" : "#000000")};
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    & {
      width: 100%;
      height: 40px;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const PopExitNo = styled(Hover03)`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: ${({ $theme }) =>
    $theme === "light"
      ? "0.7px solid var(--palette-navy-60, #565eef)"
      : "0.7px solid  #FFFFFF"};

  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ $theme }) => ($theme === "light" ? "#565eef" : "#FFFFFF")};

  @media only screen and (max-width: 375px) {
    & {
      width: 100%;
      height: 40px;
    }
  }
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    & {
      display: block;
    }
  }
`;
