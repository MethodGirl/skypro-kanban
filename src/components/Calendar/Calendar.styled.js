
import { styled, css } from "styled-components";

export const Subttl = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;

    .date-create {
      display: none;
      margin-bottom: 7px;
    }
  }
`;

export const CalendarTtl = styled(Subttl)`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  margin-bottom: 7px;

  span {
    color: ${({ $theme }) => ($theme === "light" ? "#000" : "#ffffff")};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-auto-rows: 26px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 660px) {
    width: 100%;
    grid-auto-rows: 46px;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${({ $otherMonth }) =>
    $otherMonth &&
    css`
      opacity: 0;
    `}

  ${({ $cellday }) =>
    $cellday &&
    css`
      &:hover {
        color: #94a6be;
        background-color: #ea eef6;
      }
    `}

  ${({ $current }) =>
    $current &&
    css`
      font-weight: 700;
    `}

  ${({ $activeday }) =>
    $activeday &&
    css`
      background-color: #94a6be;
      color: #ffffff;
    `}

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;
