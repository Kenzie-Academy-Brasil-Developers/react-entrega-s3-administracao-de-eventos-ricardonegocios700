import { NewDrinkContext } from "../../providers/NewDrink/newDrink";
import { ListEventsContext } from "../../providers/ListEvents/listEvents";
import { DrinksPerEventContext } from "../../providers/DrinksPerEvent/drinksPerEvent";
import { ListEventsCSS } from "../../styles/styles";
import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const ListEvents = () => {
  const history = useHistory();
  const { newDrink } = useContext(NewDrinkContext);
  const { listEvents } = useContext(ListEventsContext);
  const { addDrinksPerEvent } = useContext(DrinksPerEventContext);

  const handleClick = (event) => {
    addDrinksPerEvent({ ...newDrink, event: event.name });
    //history.push(`/event/${event.name}`);
  };

  return (
    <ListEventsCSS>
      <div className="row_one">
        <h2>Produto:</h2>
        <img src={newDrink.image_url} alt={newDrink.name} />
        <span>
          <strong>Produto: {newDrink.name}</strong>, produzida desde:{" "}
          {newDrink.first_brewed}, volume: {newDrink.volume.value}{" "}
          {newDrink.volume.unit}
        </span>
        <span>Descrição: {newDrink.description}</span>
      </div>
      <div className="row_two">
        <h2>Adicionar em qual evento?</h2>
        <div>
          {listEvents.map((event, index) => (
            <div key={index}>
              <Link
                onClick={() => handleClick(event)}
                to={`/event/${event.name}`}
              >
                <span>
                  {event.traducao}
                  {listEvents.length === Number(index) + 1 ? "." : ", "}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ListEventsCSS>
  );
};
