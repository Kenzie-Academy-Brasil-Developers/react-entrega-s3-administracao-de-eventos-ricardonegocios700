import { ListDrinksCSS } from "../../styles/styles";
import { ShowDrinks } from "../../components/ShowDrinks/showDrinks";

export const ListDrinks = () => {
  return (
    <>
      <ListDrinksCSS>
        <ShowDrinks />
      </ListDrinksCSS>
    </>
  );
};
