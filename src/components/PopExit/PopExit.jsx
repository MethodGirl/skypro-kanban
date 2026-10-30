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

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();

    setIsAuth(false);
    sessionStorage.removeItem("isAuth");

    navigate("/login");
  };

  const handleStay = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes" type="button" onClick={handleExit}>
                Да, выйти
              </PopExitYes>
              <PopExitNo id="exitNo" type="button" onClick={handleStay}>
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
