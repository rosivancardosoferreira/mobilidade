import styled from "styled-components";
import { SectionNormal } from "styles/shared";

export const ContainerMaterialDownload = styled.section`
  ${SectionNormal}
`;

export const ContainerItemsMap = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 32px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    max-width: var(--max-width-tablet);
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    grid-template-columns: repeat(4, 1fr);
  }
`;
