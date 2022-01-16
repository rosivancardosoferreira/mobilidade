import styled, { css } from "styled-components";

interface propsHeader {
  open: boolean;
}

const BGOpen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
  opacity: 1;
`;

const BGClose = css`
  opacity: 0;
`;

export const HeaderContainer = styled.header<propsHeader>`
  background-color: ${props => props.theme.colors.primaryWhite};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: ${props => props.theme.fonts.SourceSansPro};
  width: 100%;
  grid-column: 1 / 4;
  .l-background {
    display: none;
  }
  .l-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .l-header__menu {
      display: none;
    }
    img {
      width: 110px;
      height: 61px;
    }
    .l-header__item_header {
      display: flex;
      gap: 30px;
      align-items: center;
      li {
        button {
          padding: 5px 20px;
        }
        a {
          text-decoration: none;
          font-size: var(--f-normal);
          font-weight: 600;
          color: ${props => props.theme.colors.primaryBlackDark};
          transition: all 0.3s;
          :after {
            content: "";
            margin-top: 5px;
            width: 0px;
            height: 3px;
            border-radius: 50px;
            display: block;
            background-color: ${props => props.theme.colors.primaryBlackDark};
            transition: all 0.4s;
          }
          :hover {
            :after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .l-header {
      padding: 14px 72px;
    }
  }

  @media screen and (max-width: 1023px) {
    .l-background {
      display: block;
      transition: all 0.2s;
      ${props => (props.open ? BGOpen : BGClose)};
    }
    .l-header {
      justify-content: flex-start;
      gap: 32px;
      padding: 14px 32px;
      .l-header__open {
        z-index: 2;
      }
      .l-header__item_header {
        display: none;
      }

      .l-header__menu {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transform: all 0.5s ease-in-out;
        box-sizing: border-box;

        .l-header__menu_burger,
        .l-header__menu_burger::before,
        .l-header__menu_burger::after {
          background-color: ${props => props.theme.colors.primaryYellow};
          transition: all 0.5s ease-in-out;
          height: 2px;
        }

        .l-header__menu_burger {
          width: 20px;
          margin-right: 3px;
        }

        .l-header__menu_burger::before,
        .l-header__menu_burger::after {
          background-color: ${props => props.theme.colors.primaryYellow};
          content: "";
          right: 3px;
          position: absolute;
          width: 20px;
        }
        .l-header__menu_burger::before {
          transform: translateY(-7px);
        }

        .l-header__menu_burger::after {
          transform: translateY(7px);
        }
      }
      .l-header__menu.l-header__open .l-header__menu_burger {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
      }

      .l-header__menu.l-header__open .l-header__menu_burger::before {
        transform: rotate(45deg) translate(35px, -35px);
        right: 0;
      }

      .l-header__menu.l-header__open .l-header__menu_burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
        right: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .l-header {
      max-width: var(--max-width-desktop);
    }
  }
`;
