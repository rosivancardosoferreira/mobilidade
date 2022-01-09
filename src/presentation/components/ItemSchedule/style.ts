import styled from "styled-components";

export const ContainerItem = styled.section`
  margin-bottom: 3rem;
  display: flex;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  .item__date {
    border-radius: 10px 0 0 10px;
    width: fit-content;
    background-color: ${props => props.theme.colors.primaryBlack};
    color: ${props => props.theme.colors.primaryWhite};
    font-family: "Montserrat", sans-serif;
    padding: 0 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .item__num {
      font-size: var(--f-media-large);
      font-weight: 600;
    }
    .item__month {
      font-size: var(--f-normal);
    }
  }

  .item__datas {
    background-color: ${props => props.theme.colors.primaryWhite};
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 10px 10px 0;
    .item__datas__people {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      .item__title_activity {
        color: ${props => props.theme.colors.lightBlue};
        font-family: "Source Sans Pro", sans-serif;
        font-size: var(--f-normal);
        font-weight: 600;
      }
      .item__people {
        color: ${props => props.theme.colors.primaryBlack};
        font-family: "Source Sans Pro", sans-serif;
        font-size: var(--f-normal);
      }

      .item__time {
        background-color: ${props => props.theme.colors.primaryYellow};
        display: flex;
        align-items: center;
        width: fit-content;
        border-radius: 20px;
        padding: 5px 10px;
        .item__time_desc {
          color: ${props => props.theme.colors.primaryBlack};
          font-family: "Source Sans Pro", sans-serif;
          font-size: var(--f-normal);
          font-weight: 600;
          margin-left: 5px;
        }
      }
    }

    .svg__control {
      cursor: pointer;
    }
  }
`;
