import { useState } from "react";
import { useAuth } from "../../context/auth/useAuth";
import {
  PopExit as PopExitWrapper,
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
} from "./PopExit.styled";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/theme/useTheme";

const PopExit = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState("open");
  const { theme } = useTheme();

  const handleExit = (e) => {
    e.preventDefault();

    setIsAuth(false);
    sessionStorage.removeItem("userInfo");

    setModalState("open");
    navigate("/login");
  };

  const handleStay = (e) => {
    e.preventDefault();
    setModalState("closed");
    navigate("/");
  };

  return (
    <PopExitWrapper id="popExit" $state={modalState}>
      <PopExitContainer $theme={theme}>
        <PopExitBlock $theme={theme}>
          <PopExitTtl $theme={theme}>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes
                id="exitYes"
                type="button"
                onClick={handleExit}
                $theme={theme}
              >
                Да, выйти
              </PopExitYes>
              <PopExitNo
                $theme={theme}
                id="exitNo"
                type="button"
                onClick={handleStay}
              >
                Нет, остаться
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
};

export default PopExit;
