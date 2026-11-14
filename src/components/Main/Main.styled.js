import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
   background-color: ${({ $theme }) =>
    $theme === "dark" ? "#151419" : "rgb(234, 238, 246)"};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    & {
      width: 100%;
      margin: 0 auto;
      padding: 40px 0 64px;
    }
  }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    & {
      display: block;
    }
  }
`;

export const ErrorMessage = styled.div`
  padding: 14px 18px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;

  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#3b252b" : "#fff0f0"};

  border: 1px solid
    ${({ $theme }) =>
      $theme === "dark" ? "#75404a" : "#ffcaca"};

  color: ${({ $theme }) =>
    $theme === "dark" ? "#ffb8c2" : "#c0392b"};
`;