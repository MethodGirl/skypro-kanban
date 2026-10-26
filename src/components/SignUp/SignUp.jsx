import {
  Wrapper as SignUpWrapper,
  ContainerSignIn,
  ModalBlock,
  ModalFormGroup,
  Modal,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
} from "../Login/Login.styled.js";
import { Link } from "react-router-dom";
import { ModalBtnSignupEnt } from "./SignUp.styled.js";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin>
              <ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalBtnSignupEnt id="SignUpEnter">
                Зарегистрироваться
              </ModalBtnSignupEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </SignUpWrapper>
  );
};

export default SignUp;
