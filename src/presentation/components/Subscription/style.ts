import styled from "styled-components";
export const ContainerSubscription = styled.section`
  grid-column: 1 / 4;
  width: 100%;
  margin: 0 auto;
  .sub__description {
    color: ${props => props.theme.colors.primaryBlackDark};
    font-size: var(--f-media);
    font-family: "Source Sans Pro", sans-serif;
    line-height: 2rem;
    .sub__strong {
      font-weight: 700px;
      color: ${props => props.theme.colors.blueDark};
    }
  }

  .btn__secondary {
    margin: auto;
    margin-top: 15px;
    padding-left: 3%;
    padding-right: 3%;
  }

  @media screen and (min-width: 0) {
    padding: 0 32px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    padding: 0 72px;
  }
`;
