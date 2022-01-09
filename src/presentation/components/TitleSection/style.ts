import styled from "styled-components";

export const ContainerTitleSection = styled.section`
  width: fit-content;
  margin-bottom: 40px;
  .title__h1 {
    color: ${props => props.theme.colors.primaryBlackDark};
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: var(--f-media-large);
    .title__infinite {
      position: relative;
      background: ${props => props.theme.colors.primaryBlackDark};
      width: 100%;
      height: 10px;
      transform-origin: bottom;
      margin-top: 5px;
      border-radius: 3px;
      :before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
          90deg,
          ${props => props.theme.colors.primaryYellow} 0%,
          ${props => props.theme.colors.primaryYellow} 70%,
          ${props => props.theme.colors.primaryBlackDark} 70%,
          ${props => props.theme.colors.primaryBlackDark} 100%
        );
        background-size: 60px;
        animation: animate 4s linear infinite;
      }
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
