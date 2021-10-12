import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DrinksContext } from "../../providers/Drinks/drinks";
import { NewDrinkContext } from "../../providers/NewDrink/newDrink";
import { useParams } from "react-router";
import { DrinksPerEventContext } from "../../providers/DrinksPerEvent/drinksPerEvent";

export const ShowDrinks = () => {
  const params = useParams();
  const { drinks } = useContext(DrinksContext);
  const { drinksPerEvent, removeDrinksPerEvent } = useContext(
    DrinksPerEventContext
  );

  console.log(drinks);
  const newDrinks = () => {
    if (!params.id) {
      return drinks;
    } else {
      return drinksPerEvent.filter((item) => {
        return item.event === params.id;
      });
    }
  };

  const nDrinks = newDrinks();
  const { addNewDrink } = useContext(NewDrinkContext);
  const history = useHistory();

  const handleClickRemove = (item) => {
    removeDrinksPerEvent(item);
  };
  const handleClickAdd = (item) => {
    addNewDrink({
      id: item.id,
      name: item.name,
      first_brewed: item.first_brewed,
      description: item.description,
      image_url: item.image_url,
      volume: { value: item.volume.value, unit: item.volume.unit },
    });
    history.push("/listEvents");
  };
  return (
    <>
      {nDrinks.map((item) => (
        <div key={item.id} className="drink">
          <img src={item.image_url} alt={item.name} />
          <span>
            <strong>{item.name}</strong>
          </span>
          {!!params.id && (
            <button onClick={() => handleClickRemove(item)}>Remover</button>
          )}
          {!params.id && (
            <button onClick={() => handleClickAdd(item)}>Comprar</button>
          )}
        </div>
      ))}
    </>
  );
};
