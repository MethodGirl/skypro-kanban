import {
  Wrapper as LoginWrapper,
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
} from "./Login.styled.js";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    sessionStorage.setItem("isAuth", "true");

    navigate("/");
  };

  return (
    <LoginWrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin onSubmit={handleLogin}>
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnter type="submit" id="btnEnter">
                Войти
              </ModalBtnEnter>
            </ModalFormLogin>
            <ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/register">Регистрируйтесь здесь</Link>
            </ModalFormGroup>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </LoginWrapper>
  );
};

export default Login;
