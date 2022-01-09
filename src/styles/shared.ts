import { css } from "styled-components";

export const GridSection = css`
  @media screen and (min-width: 0) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0 32px;
    column-gap: 16px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: var(--max-width-tablet);
    column-gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    grid-template-columns: repeat(12, 1fr);
    padding: 0 72px;
  }
`;

export const SectionNormal = css`
  grid-column: 1 / 4;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 0) {
    padding: 0 32px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    padding: 0 72px;
  }
`;
