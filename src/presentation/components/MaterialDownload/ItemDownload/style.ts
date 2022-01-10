import styled from "styled-components";

export const ContainerItem = styled.section`
  border: 1px solid rgba(0, 102, 255, 0.25);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .download__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item__material__title {
      color: ${props => props.theme.colors.secondaryBlack};
      font-size: var(--f-normal);
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
    }

    .item__material__description {
      color: ${props => props.theme.colors.primaryBlackDark};
      font-size: var(--f-smal);
      font-family: "Montserrat", sans-serif;
      margin-top: 15px;
      line-height: 1.3rem;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .link__primary {
    margin-top: 30px;
    width: 100%;
  }
`;
