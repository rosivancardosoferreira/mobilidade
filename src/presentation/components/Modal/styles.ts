import styled from "styled-components";
import { RemoveScroll } from "styles/shared";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ContentModal = styled.div`
  ${RemoveScroll}
  width: 55%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.primaryWhite};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-height: 75vh;
  padding: 1rem;
  padding-top: 3rem;
  position: relative;
  .modal__close {
    position: fixed;
    right: 7px;
    top: 7px;
    background-color: transparent;
    border: none;
    .icon__close {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const ContentModalProfile = styled.div`
  display: flex;
  column-gap: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.lightBlue};
  .profile__photo__img {
    border-radius: 5px;
    width: 150px;
    height: 180px;
    object-fit: cover;
  }

  .profile__name {
    color: ${props => props.theme.colors.blueDark};
    font-size: var(--f-media);
    font-family: ${props => props.theme.fonts.Montserrat};
    font-weight: 600;
    margin: 10px 0;
  }

  .profile__description {
    color: ${props => props.theme.colors.BlackDark};
    font-size: var(--f-normal);
    font-family: ${props => props.theme.fonts.SourceSansPro};
    font-weight: 400;
    line-height: 1.8rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    .profile__name {
      display: block;
      width: fit-content;
      margin-bottom: 10px;
    }
  }
`;
