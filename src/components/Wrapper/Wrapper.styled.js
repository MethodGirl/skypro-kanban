import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#151419" : "rgb(234, 238, 246)"};
`;
