import { createContext, useState } from "react";

export const DrinksPerEventContext = createContext([]);

export const DrinksPerEventProvider = ({ children }) => {
  const [drinksPerEvent, setDrinksPerEvent] = useState([]);

  const addDrinksPerEvent = (drink, event) => {
    const item = { event: event, ...drink };
    setDrinksPerEvent([...drinksPerEvent, item]);
  };

  const removeDrinksPerEvent = (item) => {
    const newDrinksPerEvent = drinksPerEvent.filter((newItem) => {
      return newItem.name !== item.name && newItem.event !== item.event;
    });
    setDrinksPerEvent(newDrinksPerEvent);
  };

  return (
    <DrinksPerEventContext.Provider
      value={{
        drinksPerEvent,
        setDrinksPerEvent,
        addDrinksPerEvent,
        removeDrinksPerEvent,
      }}
    >
      {children}
    </DrinksPerEventContext.Provider>
  );
};
