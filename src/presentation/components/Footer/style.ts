import styled from "styled-components";
import { SectionNormal } from "styles/shared";
export const ContainerFooter = styled.section`
  grid-column: 1 / 4;

  .footer__first__part {
    ${SectionNormal}
    display: flex;
    justify-content: space-between;

    .footer__title {
      color: ${props => props.theme.colors.blueDark};
      font-size: var(--f-normal);
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 600;
      margin-bottom: 20px;
      display: block;
      width: fit-content;
    }

    .footer__logos {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer__realization {
      .footer__item__realization {
        display: flex;
        column-gap: 30px;
        .footer__logos:nth-child(1) {
          .footer__logos__img {
            width: 56px;
            height: 92px;
          }
        }
        .footer__logos:nth-child(2) {
          .footer__logos__img {
            width: 77px;
            height: 94px;
          }
        }
      }
    }

    .footer__support {
      .footer__logos {
        .footer__logos__img {
          width: 262px;
          height: 83px;
        }
      }
    }

    .footer__social {
      .footer__social_medias {
        display: flex;
        column-gap: 20px;
      }
    }
  }

  .footer__last__part {
    margin-top: 30px;
    .footer__street {
      position: relative;
      background: ${props => props.theme.colors.primaryBlackDark};
      width: 100%;
      height: 50px;
      transform-origin: bottom;
      transform-style: preserve-3d;
      transform: perspective(500px) rotateX(20deg);
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
        animation: animate 4.5s linear infinite;
      }
    }

    .footer__credits {
      background-color: ${props => props.theme.colors.BlackDark};
      display: flex;
      justify-content: center;
      padding: 12px;

      .footer__description,
      .footer__dev {
        color: ${props => props.theme.colors.primaryWhite};
        font-size: var(--f-normal);
        font-family: "Source Sans Pro", sans-serif;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .footer__realization,
    .footer__support,
    .footer__support {
    }
  }
`;
