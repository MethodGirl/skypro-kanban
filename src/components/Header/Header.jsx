import lightLogo from "../../../public/logo.png";
import darkLogo from "../../../public/logo_dark.png";
import { useState } from "react";
import {
  Header as HeaderWrapper,
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderPopUserSet,
  LogoDark,
  LogoLight,
  CreateTaskButton,
  UserButton,
} from "./Header.styled.js";
import { Hover03 } from "../../styles/Common.styled.js";
import {
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUserSet.styled.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <LogoLight>
            <a href="" target="_self">
              <img src={lightLogo} alt="logo" />
            </a>
          </LogoLight>
          <LogoDark>
            <a href="" target="_self">
              <img src={darkLogo} alt="logo" />
            </a>
          </LogoDark>
          <HeaderNav>
            <CreateTaskButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </CreateTaskButton>
            <UserButton onClick={() => setIsOpen(!isOpen)}>
              <a href="#user-set-target">Ivan Ivanov</a>
            </UserButton>
            {isOpen && (
              <HeaderPopUserSet id="user-set-target">
                <a href="">x</a>
                <PopUserSetName> Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <Hover03 type="button">
                  <a href="#popExit">Выйти</a>
                </Hover03>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
