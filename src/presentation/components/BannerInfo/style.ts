import styled from "styled-components";
import { GridSection } from "styles/shared";
import Images from "utils/images";

export const ContainerBannerInfo = styled.section`
  grid-column: 1 / 4;
  position: relative;
  background: url(${Images.Banner.src});
  background-color: ${props => props.theme.colors.blueDark};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 90px 0;
  margin-top: -90px;
  .banner_article__title {
    ${GridSection}
    .banner__title {
      grid-column: 1 / 7;
      color: ${props => props.theme.colors.primaryWhite};
      font-size: var(--f-extra-large);
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  @media screen and (max-width: 768px) {
    .banner_article__title {
      .banner__title {
        grid-column: 1 / 9;
        font-size: var(--f-media-large);
      }
    }
  }
`;
