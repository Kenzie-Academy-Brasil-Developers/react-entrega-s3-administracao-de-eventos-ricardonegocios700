import styled from "styled-components";

export const ListDrinksCSS = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .drink {
    display: flex;
    flex-direction: row;
    width: 30vw;

    #drink-col_left,
    #drink-col_right {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      span {
        font-size: 0.75em;
      }
      img {
        width: auto;
        height: 20%;
      }
      button {
        width: 100%;
      }
    }
  }
`;

const teste = styled.div``;
