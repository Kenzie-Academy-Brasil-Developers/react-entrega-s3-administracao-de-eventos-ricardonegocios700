import { useContext } from "react";
import { useParams } from "react-router";
import { DrinksPerEventContext } from "../../providers/DrinksPerEvent/drinksPerEvent";

export const Event = () => {
  const params = useParams();
  const { drinksPerEvent } = useContext(DrinksPerEventContext);
  const arrayWork = drinksPerEvent.filter((item) => {
    return item.event === params.id;
  });
  return (
    <>
      <h2>Evento com params</h2>
      <span>{params.id}</span>
      {arrayWork.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
        </div>
      ))}
    </>
  );
};
