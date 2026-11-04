import Column from "../Column/Column";
import Loader from "../Loader/Loader";
import {
  Main as MainWrapper,
  MainBlock,
  MainContent,
} from "./Main.styled.js";
import { Container } from "../../styles/Common.styled.js";
import GlobalStyles from "../../styles/GlobalStyles.js";

const Main = ({ tasks, isLoading, error }) => {
  return (
    <>
      <GlobalStyles />

      <MainWrapper>
        <Container>
          <MainBlock>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <p>{error}</p>
            ) : (
              <MainContent>
                <Column condition="Без статуса" tasks={tasks} />
                <Column condition="Нужно сделать" tasks={tasks} />
                <Column condition="В работе" tasks={tasks} />
                <Column condition="Тестирование" tasks={tasks} />
                <Column condition="Готово" tasks={tasks} />
              </MainContent>
            )}
          </MainBlock>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Main;