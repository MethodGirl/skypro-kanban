import { useState } from "react";
import AuthContext from "./AuthContext";

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    Boolean(sessionStorage.getItem("userInfo")),
  );

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
