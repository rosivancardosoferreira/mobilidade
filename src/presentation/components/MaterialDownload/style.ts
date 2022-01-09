import styled from "styled-components";
import { SectionNormal } from "styles/shared";

export const ContainerMaterialDownload = styled.section`
  ${SectionNormal}
`;

export const ContainerItemsMap = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    max-width: var(--max-width-tablet);
    column-gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    grid-template-columns: repeat(4, 1fr);
  }
`;
