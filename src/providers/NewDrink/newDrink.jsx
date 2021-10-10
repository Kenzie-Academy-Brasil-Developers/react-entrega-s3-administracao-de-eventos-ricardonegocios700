import { createContext, useState } from "react";

export const NewDrinkContext = createContext([]);

export const NewDrinkProvider = ({ children }) => {
  const [newDrink, setNewDrink] = useState({});

  const addNewDrink = (item) => {
    setNewDrink(item);
  };

  return (
    <NewDrinkContext.Provider value={{ newDrink, addNewDrink }}>
      {children}
    </NewDrinkContext.Provider>
  );
};
