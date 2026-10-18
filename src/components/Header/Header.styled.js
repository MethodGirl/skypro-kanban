import styled from "styled-components";
import { Button } from "../../styles/Common.styled.js";
import { PopUserSet } from "./PopUserSet.styled.js";

export const HeaderPopUserSet = styled(PopUserSet)`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const Hover01 = styled.button`
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

export const Hover03 = styled.button`
  &:hover {
    background-color: #33399b;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    & {
      width: 100%;
      padding: 0 16px;
    }
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const LogoLight = styled(HeaderLogo)`
  display: block;
`;

export const LogoDark = styled(HeaderLogo)`
  display: none;
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateTaskButton = styled(Hover01)`
  width: 178px;
  height: 30px;
  background-color: #565eef;
  color: #ffffff;
  margin-right: 20px;
  border: none;
  font-size: 14px;
  line-height: 10px;
  font-weight: 500;
  cursor: pointer;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    position: fixed;
    z-index: 3;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const HeaderUser = styled(Hover02)`
  color: #565eef;
`;

export const UserButton = styled(Button)`
  background-color: transparent;
  width: 84px;
  position: relative;
  color: #565eef;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    right: -10px;
    top: 1px;
    padding: 0;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;
