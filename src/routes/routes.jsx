import { Switch, Route } from "react-router-dom";
import { ListDrinks } from "../pages/ListDrinks/listDrinks";
import { ListEvents } from "../pages/ListEvents/listEvents";
import { Event } from "../pages/Event/event";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ListDrinks />
      </Route>
      <Route path="/listEvents">
        <ListEvents />
      </Route>
      <Route exact path="/event">
        <h2>Evento</h2>
      </Route>
      <Route path="/event/:id">
        <Event />
      </Route>
    </Switch>
  );
};
