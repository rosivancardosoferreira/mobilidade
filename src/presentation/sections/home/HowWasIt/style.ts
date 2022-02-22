import styled from "styled-components";
import { SectionNormal } from "styles/shared";

export const ContainerHowWasIt = styled.section`
  ${SectionNormal}
`;

export const ContainerItemsMap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;

  .video__map {
    .title__video {
      font-size: 1rem;
      color: ${props => props.theme.colors.primaryBlack};
      font-size: var(--f-media);
      font-family: ${props => props.theme.fonts.Montserrat};
      font-weight: 600;
      margin-top: 20px;
    }

    .description__video {
      font-size: 1rem;
      color: ${props => props.theme.colors.secondaryBlack};
      font-size: var(--f-normal);
      font-family: ${props => props.theme.fonts.Montserrat};
      font-weight: 500;
      margin-top: 10px;
    }
  }

  .box__item__video {
    width: 100%;
    position: relative;
    padding-bottom: 56.3%;
  }

  .item__video {
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .item__video {
    }
  }
`;
