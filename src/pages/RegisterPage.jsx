import AuthForm from "../components/AuthForm.jsx/AuthForm";

const SignUpPage = ({ setIsAuth }) => {
 return <AuthForm isLogin={false} setIsAuth={setIsAuth}/>;
}

export default SignUpPage
