import { DrinksProvider } from "./Drinks/drinks";
import { DrinksPerEventProvider } from "./DrinksPerEvent/drinksPerEvent";
import { ListEventsProvider } from "./ListEvents/listEvents";
import { NewDrinkProvider } from "./NewDrink/newDrink";

export const Providers = ({ children }) => {
  return (
    <DrinksPerEventProvider>
      <ListEventsProvider>
        <DrinksProvider>
          <NewDrinkProvider>{children}</NewDrinkProvider>
        </DrinksProvider>
      </ListEventsProvider>
    </DrinksPerEventProvider>
  );
};
