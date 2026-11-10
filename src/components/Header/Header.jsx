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
import ExitPage from "../../pages/ExitPage.jsx";
import {
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUserSet.styled.js";
import { useNavigate } from "react-router-dom";
import PopNewCard from "../PopNewCard/PopNewCard.jsx";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme/useTheme.js";

const Header = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  const user = sessionStorage.getItem("userInfo");
  const userObj = JSON.parse(user);

  return (
    <HeaderWrapper $theme={theme}>
      <Container>
        <HeaderBlock>
          <LogoLight>
            <Link to="/">
              <img src={lightLogo} alt="На главную" />
            </Link>
          </LogoLight>

          <LogoDark>
            <Link to="/">
              <img src={darkLogo} alt="На главную" />
            </Link>
          </LogoDark>
          <HeaderNav>
            <CreateTaskButton
              id="btnMainNew"
              onClick={() => setIsCreateOpen(true)}
            >
              Создать новую задачу
            </CreateTaskButton>
            <UserButton $theme={theme} onClick={() => setIsOpen(!isOpen)}>
              <a>{userObj.name}</a>
            </UserButton>
            {isOpen && (
              <HeaderPopUserSet $theme={theme} id="user-set-target">
                <PopUserSetName $theme={theme}>{userObj.name}</PopUserSetName>
                <PopUserSetMail>{userObj.login}</PopUserSetMail>
                <PopUserSetTheme $theme={theme}>
                  <p >Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "light" ? false : true}
                  />
                </PopUserSetTheme>
                <Hover03
                  type="button"
                  onClick={() => {
                    setIsExitOpen(true);
                    navigate("/exit");
                  }}
                >
                  Выйти
                </Hover03>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
      {isCreateOpen && (
        <PopNewCard onClose={() => setIsCreateOpen(false)} token={token} />
      )}
      {isExitOpen && <ExitPage />}
    </HeaderWrapper>
  );
};

export default Header;
