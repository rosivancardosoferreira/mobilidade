import styled from "styled-components";
export const ContainerAboutEvent = styled.section`
  grid-column: 1 / 4;
  width: 100%;
  margin: 0 auto;
  .about__description {
    color: ${props => props.theme.colors.primaryBlackDark};
    font-size: var(--f-media);
    font-family: "Source Sans Pro", sans-serif;
    line-height: 2rem;
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
