import styled from "styled-components";
import { SectionNormal } from "styles/shared";

export const ContainerSchedule = styled.section`
  ${SectionNormal}
`;

export const ContainerItemsMap = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 32px;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 768px) {
    max-width: var(--max-width-tablet);
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    grid-template-columns: repeat(2, 1fr);
  }
`;
