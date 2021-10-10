import { DrinksProvider } from "./Drinks/drinks";
import { DrinksPerEventProvider } from "./DrinksPerEvent/drinksPerEvent";
import { EventProvider } from "./Events/events";
import { NewDrinkProvider } from "./NewDrink/newDrink";

export const Providers = ({ children }) => {
  return (
    <DrinksPerEventProvider>
      <EventProvider>
        <DrinksProvider>
          <NewDrinkProvider>{children}</NewDrinkProvider>
        </DrinksProvider>
      </EventProvider>
    </DrinksPerEventProvider>
  );
};
