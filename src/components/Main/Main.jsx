import Column from "../Column/Column";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { Main as MainWrapper, MainBlock, MainContent } from "./Main.styled.js";
import { Container } from "../../styles/Common.styled.js";
import GlobalStyles from "../../styles/GlobalStyles.js";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <MainWrapper>
        <Container>
          <MainBlock>
            {isLoading ? (
              <Loader />
            ) : (
              <MainContent>
                <Column condition="Без статуса" />
                <Column condition="Нужно сделать" />
                <Column condition="В работе" />
                <Column condition="Тестирование" />
                <Column condition="Готово" />
              </MainContent>
            )}
          </MainBlock>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Main;
