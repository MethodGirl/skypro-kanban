import lightLogo from "../../../public/logo.png";
import darkLogo from "../../../public/logo_dark.png";
import { useState, useEffect, useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import PopNewCard from "../PopNewCard/PopNewCard.jsx";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme/useTheme.js";

const Header = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  const userButtonRef = useRef(null);
  const popUserSetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !userButtonRef.current?.contains(event.target) &&
        !popUserSetRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const user = sessionStorage.getItem("userInfo");
  const userObj = JSON.parse(user);

  return (
    <HeaderWrapper $theme={theme}>
      <Container>
        <HeaderBlock>
          <LogoLight>
            <Link to="/">
              <img
                src={theme === "light" ? lightLogo : darkLogo}
                alt="На главную"
              />
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
            <UserButton
              ref={userButtonRef}
              $theme={theme}
              onClick={() => setIsOpen(!isOpen)}
            >
              <a>{userObj.name}</a>
            </UserButton>
            {isOpen && (
              <HeaderPopUserSet
                ref={popUserSetRef}
                $theme={theme}
                id="user-set-target"
              >
                <PopUserSetName $theme={theme}>{userObj.name}</PopUserSetName>
                <PopUserSetMail>{userObj.login}</PopUserSetMail>
                <PopUserSetTheme $theme={theme}>
                  <p>Темная тема</p>
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
    </HeaderWrapper>
  );
};

export default Header;
