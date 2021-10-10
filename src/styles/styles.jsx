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
      padding-left: 20px;
      span {
        font-size: 0.75em;
        margin-bottom: 15px;
      }
      img {
        width: auto;
        height: 20%;
      }
      button {
        margin-top: 15px;
        width: 100%;
      }
    }
  }
`;

const teste = styled.div``;
