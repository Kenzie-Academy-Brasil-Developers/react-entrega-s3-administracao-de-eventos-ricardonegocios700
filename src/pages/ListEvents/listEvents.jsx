import { NewDrinkContext } from "../../providers/NewDrink/newDrink";
import { ListEventsContext } from "../../providers/ListEvents/listEvents";
import { DrinksPerEventContext } from "../../providers/DrinksPerEvent/drinksPerEvent";
import { useContext } from "react";
import { useHistory } from "react-router";

export const ListEvents = () => {
  const history = useHistory();
  const { newDrink } = useContext(NewDrinkContext);
  const { listEvents } = useContext(ListEventsContext);
  const { addDrinksPerEvent } = useContext(DrinksPerEventContext);
  const handleClick = (event) => {
    addDrinksPerEvent({ ...newDrink, event: event });
    history.push(`/event/${event}`);
  };

  return (
    <>
      <h2>Selecionar o evento</h2>
      <img src={newDrink.image_url} alt={newDrink.name} />
      <span>Produto: {newDrink.name}</span>
      <span>Produzida desde: {newDrink.first_brewed}</span>
      <span>Descrição: {newDrink.description}</span>
      <span>
        Volume: {newDrink.volume.value} {newDrink.volume.unit}
      </span>
      <h2>Informe o tipo de evento:</h2>
      {listEvents.map((event, index) => (
        <div key={index}>
          <button onClick={() => handleClick(event)}>
            <span>{event}</span>
          </button>
        </div>
      ))}
    </>
  );
};
