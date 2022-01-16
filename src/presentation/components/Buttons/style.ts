import styled, { css } from "styled-components";
interface propsButton {
  typeBtn: "primary" | "secondary" | "send__message";
}

const BtnPrimary = css`
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.primaryWhite};
  font-size: var(--f-normal);
  font-family: ${props => props.theme.fonts.SourceSansPro};
  font-weight: 600;
  /* border: 2px solid ${props => props.theme.colors.blueDark}; */
`;

const BtnSecondary = css`
  background-color: ${props => props.theme.colors.primaryRed};
  color: ${props => props.theme.colors.primaryWhite};
  font-size: var(--f-normal);
  font-family: ${props => props.theme.fonts.SourceSansPro};
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primaryRed};
  border-radius: 20px;
`;

const BtnSendMessage = css`
  ${BtnSecondary}
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
  &:hover {
    svg path {
      fill: ${props => props.theme.colors.primaryWhite};
    }
  }
`;

export const ButtonDefault = css<propsButton>`
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  width: fit-content;
  text-align: center;
  ${props => props.typeBtn === "primary" && BtnPrimary}
  ${props => props.typeBtn === "secondary" && BtnSecondary}
  ${props => props.typeBtn === "send__message" && BtnSendMessage}
`;

export const ButtonContainer = styled.button`
  ${ButtonDefault}
`;

export const LinkContainer = styled.a`
  ${ButtonDefault}
`;
