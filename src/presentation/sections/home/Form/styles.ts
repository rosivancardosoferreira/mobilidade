import styled from "styled-components";

export const Teste = styled.section`
  grid-column: 1 / 4;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  form {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
  }
  form * {
    width: 100%;
    padding: 10px;
  }
  button {
    padding: 20px;
  }

  .required-empty {
    color: red;
  }
  .required-empty-hidden {
    opacity: 0;
  }
`;
