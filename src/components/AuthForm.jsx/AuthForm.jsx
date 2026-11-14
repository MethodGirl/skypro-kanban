import { useState } from "react";
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

import { signIn, signUp } from "../../services/auth.js";
import { ModalBtnSignupEnt } from "../SignUp/SignUp.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { ErrorEl } from "./Error.styled.js";
import { useAuth } from "../../context/auth/useAuth.js";
import { useTheme } from "../../context/theme/useTheme.js";


const AuthForm = ({ isLogin }) => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const {theme} = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    console.log("Пароль:", JSON.stringify(formData.password));
    const newErrors = { name: "", password: "", login: "" };
    let isValid = true;

    if (!isLogin && formData.name.trim().length < 3) {
      newErrors.name = true;
      isValid = false;

      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.",
      );
    }

    if (!formData.login.trim() || formData.login.trim().length < 3) {
      newErrors.login = true;
      isValid = false;

      if (isLogin) {
        setError(
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
        );
      } else {
        setError(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.",
        );
      }
    }

    if (!formData.password.trim() || formData.password.trim().length < 3) {
      newErrors.password = true;
      isValid = false;

      if (isLogin) {
        setError(
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
        );
      } else {
        setError(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.",
        );
      }
    }

    setErrors(newErrors);
    console.log("Ошибки формы:", newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const data = isLogin
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        sessionStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch {
      if (isLogin) {
        setError(
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
        );
      } else {
        setError(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.",
        );
      }
    }
  };

  return (
    <AuthWrapper $theme={theme}>
      <ContainerSignIn $theme={theme}>
        <Modal>
          <ModalBlock $theme={theme}>
            <ModalTtl $theme={theme}>
              <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
            </ModalTtl>
            <ModalFormLogin onSubmit={handleSubmit}>
              {!isLogin && (
                <ModalInput
                  $theme={theme}
                  $error={errors.name || undefined}
                  type="text"
                  name="name"
                  id="first-name"
                  value={formData.name}
                  placeholder="Имя"
                  onChange={handleChange}
                />
              )}
              <ModalInput
                $theme={theme}
                $error={errors.login || undefined}
                type="text"
                name="login"
                value={formData.login}
                id={isLogin ? "formlogin" : "loginReg"}
                placeholder="Эл. почта"
                onChange={handleChange}
              />
              <ModalInput
                $theme={theme}
                $error={errors.password || undefined}
                type="password"
                name="password"
                value={formData.password}
                id={isLogin ? "formpassword" : "passwordFirst"}
                placeholder="Пароль"
                onChange={handleChange}
              />
              <ErrorEl>{error}</ErrorEl>
              {isLogin ? (
                <ModalBtnEnter
                  type="submit"
                  id="btnEnter"
                  $error={errors.login || errors.password}
                >
                  Войти
                </ModalBtnEnter>
              ) : (
                <ModalBtnSignupEnt
                  id="SignUpEnter"
                  $error={errors.name || errors.login || errors.password}
                >
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
