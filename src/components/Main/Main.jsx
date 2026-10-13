import Column from "../Column/Column";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="main__content">
              <Column condition="Без статуса" />
              <Column condition="Нужно сделать" />
              <Column condition="В работе" />
              <Column condition="Тестирование" />
              <Column condition="Готово" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
