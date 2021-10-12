import { Switch, Route } from "react-router-dom";
import { ListDrinks } from "../pages/ListDrinks/listDrinks";
import { ListEvents } from "../pages/ListEvents/listEvents";
import { Event } from "../pages/Event/event";
import { Header } from "../components/Header/header";
import { HeaderCSS } from "../styles/styles";
import { GlobalStyle } from "../styles/global";

export const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderCSS>
        <Header />
      </HeaderCSS>
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
    </>
  );
};
