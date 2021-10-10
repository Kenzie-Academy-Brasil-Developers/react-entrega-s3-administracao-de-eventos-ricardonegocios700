import { createContext, useState } from "react";

export const EventContext = createContext([]);

export const EventProvider = ({ children }) => {
  const [event] = ["graduation", "wedding", "confraternization"];

  return (
    <EventContext.Provider value={{ event }}>{children}</EventContext.Provider>
  );
};
