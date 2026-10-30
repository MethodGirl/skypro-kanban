import {
  Wrapper as AuthWrapper,
  ContainerSignIn,
  ModalBlock,
  ModalFormGroup,
  Modal,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnter,
} from "../Login/Login.styled.js";

import { ModalBtnSignupEnt } from "../SignUp/SignUp.styled.js";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ isLogin, setIsAuth }) => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    sessionStorage.setItem("isAuth", "true");
    navigate("/");
  };

  return (
    <AuthWrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
            </ModalTtl>
            <ModalFormLogin onSubmit={handleSubmit}>
              {!isLogin && (
                <ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id={isLogin ? "formlogin" : "loginReg"}
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id={isLogin ? "formpassword" : "passwordFirst"}
                placeholder="Пароль"
              />
              {isLogin ? (
                <ModalBtnEnter type="submit" id="btnEnter">
                  Войти
                </ModalBtnEnter>
              ) : (
                <ModalBtnSignupEnt id="SignUpEnter">
                  Зарегистрироваться
                </ModalBtnSignupEnt>
              )}
            </ModalFormLogin>
            <ModalFormGroup>
              {isLogin ? (
                <>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/register">Регистрируйтесь здесь</Link>
                </>
              ) : (
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              )}
            </ModalFormGroup>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </AuthWrapper>
  );
};

export default AuthForm;
