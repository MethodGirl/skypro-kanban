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

import { ModalBtnSignupEnt } from "../SignUp/SignUp.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/auth.js";

const AuthForm = ({ isLogin, setIsAuth }) => {
  const navigate = useNavigate();

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
    const newErrors = { name: "", password: "", login: "" };
    let isValid = true;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = true;
      setError("Пожалуйста, заполните поле 'Имя'");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Пожалуйста, заполните поле 'Логин'");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Пожалуйста, заполните поле 'Пароль'");
      isValid = false;
    }

    setErrors(newErrors);
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
    } catch (err) {
      setError(err.message);
    }
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
                  error={errors.name || undefined}
                  type="text"
                  name="name"
                  id="first-name"
                  value={formData.name}
                  placeholder="Имя"
                  onChange={handleChange}
                />
              )}
              <ModalInput
                error={errors.login || undefined}
                type="text"
                name="login"
                value={formData.login}
                id={isLogin ? "formlogin" : "loginReg"}
                placeholder="Эл. почта"
                onChange={handleChange}
              />
              <ModalInput
                error={errors.password || undefined}
                type="password"
                name="password"
                value={formData.password}
                id={isLogin ? "formpassword" : "passwordFirst"}
                placeholder="Пароль"
                onChange={handleChange}
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
            <p style={{ color: "red" }}>{error}</p>
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
