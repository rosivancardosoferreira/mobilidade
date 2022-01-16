import styled from "styled-components";
import { SectionNormal } from "styles/shared";

export const ContainerBannerInfo = styled.section`
  grid-column: 1 / 4;
  position: relative;
  margin-top: -90px;
  background-image: url("static/images/background.png");
  background-position: top left;
  background-size: 25px;
  background-repeat: repeat;
  background-attachment: fixed;
  display: block;
  width: 100%;

  /* borders street */
  .banner__bar__top,
  .banner__bar__bottom {
    position: relative;
    background: ${props => props.theme.colors.primaryBlackDark};
    width: 100%;
    height: 50px;
    :before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.primaryYellow} 0%,
        ${props => props.theme.colors.primaryYellow} 70%,
        ${props => props.theme.colors.primaryBlackDark} 70%,
        ${props => props.theme.colors.primaryBlackDark} 100%
      );
      background-size: 60px;
    }
  }

  /* bordes yellow */
  .banner__article {
    border: 15px solid ${props => props.theme.colors.primaryYellow};
    border-top: 0;
    border-bottom: 0;
    margin: 0 15px;
  }

  /* banner infos */
  .banner__infos {
    ${SectionNormal}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    column-gap: 20px;
    .banner__line {
      height: 150px;
      width: 10px;
      background-color: ${props => props.theme.colors.primaryYellow};
    }
  }

  .banner__days {
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .banner__div__title {
      display: flex;
      align-items: center;
      column-gap: 7px;
      .banner__title {
        color: ${props => props.theme.colors.primaryYellow};
        font-family: ${props => props.theme.fonts.ArchivoBlack};
        font-weight: 100;
        text-shadow: 2px 0px 0px rgba(0, 0, 0, 0.6);
        font-size: 2.5rem;
        text-align: center;
      }
    }
    .banner__title__days {
      text-align: center;
      color: ${props => props.theme.colors.blueDark};
      font-size: var(--f-media);
      font-family: ${props => props.theme.fonts.ArchivoBlack};
      font-weight: 100;
    }
  }

  .banner__images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
    width: 45%;
    .banner__picture {
      display: flex;
      justify-content: center;
      width: 85%;
    }
    .banner__image__center {
      width: 100%;
    }
  }

  .banner__realization {
    width: 25%;
    .banner__div__realization:nth-child(2) {
      margin-top: 10px;
    }

    .banner__div__realization {
      .banner__realization__title {
        color: ${props => props.theme.colors.blueDark};
        font-size: var(--f-normal);
        font-family: ${props => props.theme.fonts.SourceSansPro};
        font-weight: 600;
        margin-bottom: 15px;
        display: block;
        width: fit-content;
      }

      .banner__realization__images {
        align-items: center;
        display: flex;
        column-gap: 10px;
        .banner__realization__logo {
          width: fit-content;
          .banner__logos {
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .banner__days .banner__div__title .banner__title {
      font-size: var(--f-media-large);
    }
    .banner__days .banner__title__days {
      font-size: 1.1rem;
    }

    .banner__realization
      .banner__div__realization
      .banner__realization__images
      .banner__realization__logo
      .banner__logos {
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    .banner__infos {
      display: grid;
      grid-template-columns: 100%;
      row-gap: 20px;
      margin: auto;
      padding: 40px 10px;

      .banner__days,
      .banner__realization {
        width: 100%;
      }

      .banner__images {
        width: 95%;
        flex-direction: column;
        margin: auto;
        .banner__picture {
          width: 100%;
          margin: 20px 0;
        }
      }

      .banner__line {
        height: 10px;
        width: 150px;
      }

      .banner__realization {
        display: flex;
        justify-content: center;
        align-items: baseline;
        column-gap: 10%;
      }
    }
  }
`;
