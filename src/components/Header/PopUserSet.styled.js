import styled from "styled-components";

export const PopUserSet = styled.div`
  &:target {
    display: block;
  }

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${({ $theme }) =>
      $theme === "dark" ? "#FFFFFF" : "rgb(86, 94, 239)"};
    border-radius: 4px;
    border: ${({ $theme }) =>
      $theme === "dark" ? "1px solid #FFFFFF" : "1px solid #565eef"};
  }

  button a {
    color: #565eef;
  }
`;

export const PopUserSetName = styled.p`
  color: ${({ $theme }) => ($theme === "dark" ? "#FFFFFF" : "#000")};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ $theme }) => ($theme === "dark" ? "#FFFFFF" : "#000")};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
    background-color: #565eef;
  }
`;
