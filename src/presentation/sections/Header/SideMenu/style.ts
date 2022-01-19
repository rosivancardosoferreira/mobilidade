import styled, { css } from "styled-components";

interface propsSideMenu {
  open: boolean;
}

const Open = css`
  padding-left: 32px;
  padding-right: 64px;
  z-index: 3;
`;

const Close = css`
  padding: 0;
  margin-left: -300px;
`;

export const ContainetAside = styled.aside<propsSideMenu>`
  background-color: lightblue;
  position: fixed;
  background-color: ${props => props.theme.colors.primaryWhite};
  height: 100vh;
  transition: all 0.5s;
  ${props => (props.open ? Open : Close)};
  padding-top: calc(60px + 20px);
  z-index: 2;
  border: 1px solid red;
  .l-aside__item {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    li {
      a {
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        font-size: var(--f-normal);
        font-weight: 600;
        color: ${props => props.theme.colors.primaryBlackDark};
        transition: 0.3s;
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }

  .infinite {
    position: relative;
    background: ${props => props.theme.colors.primaryBlackDark};
    width: 100%;
    height: 100px;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(30deg);

    :before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 10px;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.primaryYellow} 0%,
        ${props => props.theme.colors.primaryYellow} 70%,
        ${props => props.theme.colors.primaryBlackDark} 70%,
        ${props => props.theme.colors.primaryBlackDark} 100%
      );
      background-size: 55px;
      animation: animate 2s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: -120px;
    }
  }
`;
