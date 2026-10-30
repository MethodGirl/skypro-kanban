import AuthForm from "../components/AuthForm.jsx/AuthForm";

const LoginPage = ({setIsAuth}) => {
  return  <AuthForm isLogin={true} setIsAuth={setIsAuth} />;
};

export default LoginPage;
