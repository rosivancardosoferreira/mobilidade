import styled from "styled-components";
import { RemoveScroll } from "styles/shared";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ContentModal = styled.div`
  ${RemoveScroll}
  width: 50%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.primaryWhite};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-height: 75vh;
  padding: 1rem;
  position: relative;
  .modal__close {
    position: fixed;
    border: 1px solid red;
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
`;

export const ContentModalProfile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
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
  }
`;
