import { createContext, useState } from "react";

export const DrinksPerEventContext = createContext([]);

export const DrinksPerEventProvider = ({ children }) => {
  const [drinksPerEvent, setDrinksPerEvent] = useState([]);

  const addDrinksPerEvent = (item) => {
    setDrinksPerEvent([...drinksPerEvent, item]);
  };

  const removeDrinksPerEvent = (item) => {
    let searchItem = drinksPerEvent.findIndex(
      (search) => search.name === item.name && search.event === item.event
    );
    let new2 = [];
    let newArray = drinksPerEvent.concat(new2);
    newArray.splice(searchItem, 1);
    setDrinksPerEvent(newArray);
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
