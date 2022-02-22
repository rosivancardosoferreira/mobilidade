import styled from "styled-components";

export const ContainerAboutEvent = styled.section`
  grid-column: 1 / 4;
  .section__tabs {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .tab__items {
    display: flex;
    gap: 56px;
    position: relative;
    border: 1px solid green;
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    flex-wrap: wrap;
  }

  .tab {
    border: 1px solid blue;
    width: fit-content;
    width: 40%;
  }

  .line {
    height: 4px;
    /* background: #31ade3; */
    border-radius: 100px 200px 0px 0px;
    width: 100%;
    border: none;
    position: absolute;
    bottom: 0;
    transition: all 0.3s;
  }
  .first {
    background-color: green;
    width: 40px;
    left: 7px;
    top: 35px;
  }

  .second {
    background-color: blue;
    width: 40px;
    left: 53%;
  }
  .tirsty {
    background-color: red;
    width: 40px;
    left: 7px;
  }
`;
