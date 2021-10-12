import styled from "styled-components";

export const ListDrinksCSS = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .drink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 14vw;
    margin: 15px 10px;
    text-align: center;
    span {
      margin-top: 6px;
    }

    img {
      max-width: 50px;
      max-height: auto;
    }
    button {
      margin-top: 10px;
      max-width: 50%;
      min-width: 9vw;
      background-color: var(--botao);
      color: var(--botao_fonte);
      cursor: pointer;
    }
  }
  .drink-row_above {
    flex-grow: 92;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .drink-row_below {
    flex-grow: 8;
    text-align: center;
  }
  .drink-col_left {
    flex-basis: 25%;
  }

  .drink-col_right {
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    span:last-child {
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 7; // Quantidade de linhas
      -webkit-box-orient: vertical;

      margin-bottom: 0;
    }
  }
`;

export const HeaderCSS = styled.div`
  background-color: var(--fundo_secundario);
  padding: 25px;
  text-align: right;
  font-size: 18px;
  border-end-start-radius: 200px;
`;
