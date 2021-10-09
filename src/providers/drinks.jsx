import { createContext, useState } from "react";

//criar um context para drinks
export const DrinksContext = createContext([]);

//criar um provider para drinks
//entender melhor a !== entre context e provider
export const DrinksProvider = ({ children }) => {
  //criar o state de trabalho
  const [drinks, setDrinks] = useState([]);
  //criar as function's aqui
  const addADrink = (item) => {
    setDrinks([...drinks, item]);
  };
  const removeADrink = (item) => {
    const newDrinks = drinks.filter((newItem) => newItem.name !== item.name);
    setDrinks(newDrinks);
  };

  return (
    {/* retorna o context.Provider e em value suas props */}
    <DrinksContext.Provider
      value={{ drinks, setDrinks, addADrink, removeADrink }}
    >
      {children}
    </DrinksContext.Provider>
  );
};
