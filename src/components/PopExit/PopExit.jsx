import {
  PopExit as PopExitWrapper,
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
} from "./PopExit.styled";

const PopExit = () => {
  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitYes>
              <PopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
};

export default PopExit;
