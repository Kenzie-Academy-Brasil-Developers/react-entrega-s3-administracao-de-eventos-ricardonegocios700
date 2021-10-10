import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DrinksContext } from "../../providers/Drinks/drinks";
import { NewDrinkContext } from "../../providers/NewDrink/newDrink";
import { ListDrinksCSS } from "../../styles/styles";

export const ListDrinks = () => {
  const { drinks } = useContext(DrinksContext);
  const { addNewDrink } = useContext(NewDrinkContext);
  const history = useHistory();
  const handleClick = (item) => {
    addNewDrink({
      id: item.id,
      name: item.name,
      first_brewed: item.first_brewed,
      description: item.description,
      image_url: item.image_url,
      volume: { value: item.volume.value, unit: item.volume.unit },
    });
    history.push("/events");
  };
  return (
    <>
      <h2>ListDrinks here</h2>
      <ListDrinksCSS>
        {drinks.map((item) => (
          <div key={item.id} className="drink">
            <div id="drink-col_left">
              <img src={item.image_url} alt={item.name} />
              <button onClick={() => handleClick(item)}>Comprar</button>
            </div>
            <div id="drink-col_right">
              <span>Produto: {item.name}</span>
              <span>Produzida desde: {item.first_brewed}</span>
              <span>Descrição: {item.description}</span>
              <span>
                Volume: {item.volume.value} {item.volume.unit}
              </span>
            </div>
          </div>
        ))}
      </ListDrinksCSS>
    </>
  );
};
