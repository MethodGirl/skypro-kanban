import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundText,
  HomeLink,
} from "../components/NotFoundPage/NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Страница не найдена</NotFoundText>
      <HomeLink to="/">Вернуться на главную</HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
