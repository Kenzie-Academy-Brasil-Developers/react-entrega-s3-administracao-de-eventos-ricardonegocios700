import { createContext, useState } from "react";

export const ListEventsContext = createContext([]);

export const ListEventsProvider = ({ children }) => {
  const [listEvents] = useState([
    { name: "graduation", traducao: "formatura" },
    { name: "wedding", traducao: "casamento" },
    { name: "confraternization", traducao: "confraternização" },
  ]);

  return (
    <ListEventsContext.Provider value={{ listEvents }}>
      {children}
    </ListEventsContext.Provider>
  );
};
