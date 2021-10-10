import { Switch, Route } from "react-router-dom";
import { ListDrinks } from "../pages/ListDrinks/listDrinks";
import { NewDrinkContext } from "../providers/NewDrink/newDrink";
import { useContext } from "react";

export const Routes = () => {
  const { newDrink } = useContext(NewDrinkContext);
  console.log(newDrink);
  return (
    <Switch>
      <Route exact path="/">
        <ListDrinks />
      </Route>
      <Route path="/events">
        <h2>Selecionar o evento</h2>
        <p>{newDrink.name}</p>
      </Route>
    </Switch>
  );
};
