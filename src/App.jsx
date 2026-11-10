import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GlobalStyles from "./styles/GlobalStyles";
import ExitPage from "./pages/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<BoardPage />}>
            <Route path="card/:id" element={<CardPage />} />
          </Route>
          <Route path="/exit" element={<ExitPage/>} />
        </Route>

        <Route path="/login" element={<LoginPage  />} />
        <Route
          path="/register"
          element={<RegisterPage  />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
