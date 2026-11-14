
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  line-height: 1;
  font-weight: 700;
  color: #565eef;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    font-size: 90px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 20px;
  color: #000000;
  margin-bottom: 30px;
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 24px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #33399b;
  }
`;
