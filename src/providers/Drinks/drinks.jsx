import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { Api as api } from "../../api";
// import { api } from "../../api";

//criar um context para drinks
export const DrinksContext = createContext([]);

//criar um provider para drinks
//entender melhor a !== entre context e provider
export const DrinksProvider = ({ children }) => {
  //criar o state de trabalho
  const [drinks, setDrinks] = useState([]);
  const getDrinks = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return setDrinks(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    drinks !== [] && getDrinks();
  }, []);

  //criar as function's aqui
  const addADrink = (item) => {
    setDrinks([...drinks, item]);
  };
  const removeADrink = (item) => {
    const newDrinks = drinks.filter((newItem) => newItem.name !== item.name);
    setDrinks(newDrinks);
  };

  return (
    <DrinksContext.Provider
      value={{ drinks, setDrinks, addADrink, removeADrink }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

/* passaram isso na aula Introdução Context API de 4/10
https://github.com/Kenzie-Academy-Brasil-Developers/react-demo-introducao-context-api/blob/master/src/Providers/Counter/index.js

export const useDrinks = () => useContext(DrinksContext);

mas não deu certo, resolvi seguir o exercicio 3B03
como isso confunde tudo, deve ter um modo de usar desse jeito, mas não há material
de apoio no Canvas, isso é tão comum na Kenzie.
o pior é que eu fico me batendo em tentar resolver, só qdo desisto e volto para 
exercicios anteriores consigo seguir...  

*/
