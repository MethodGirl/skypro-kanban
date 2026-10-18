
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const Button = styled.button`
  border: none;
  font-size: 14px;
  line-height: 10px;
  font-weight: 500;
  cursor: pointer;
`;

export const Hover01 = styled(Button)`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = styled.a`
  &:hover {
    color: #33399b;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = styled(Button)`
  &:hover {
    background-color: #33399b;
  }

  &:hover a {
    color: #ffffff;
  }
`;
