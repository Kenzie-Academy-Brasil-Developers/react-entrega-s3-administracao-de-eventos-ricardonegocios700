import { createContext, useState } from "react";

export const ListEventsContext = createContext([]);

export const ListEventsProvider = ({ children }) => {
  const [listEvents] = useState(["graduation", "wedding", "confraternization"]);

  return (
    <ListEventsContext.Provider value={{ listEvents }}>
      {children}
    </ListEventsContext.Provider>
  );
};
