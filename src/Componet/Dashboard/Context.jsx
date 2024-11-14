import React, { useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();
function Context({ children }) {
  const [onlineItems, setOnlineItems] = useState([
    { id: 111, name: "11-11-2023" },
    { id: 252, name: "25-2-2023" },
    { id: 246, name: "24-6-2023" },
  ]);
  const [offlineItems, setOfflineItems] = useState([
    { id: 101, name: "10-10-2024 Nasr City" },
    { id: 232, name: "23-2-2024 Nasr City" },
    { id: 214, name: "21-4-2024 Nasr City" },
    { id: 236, name: "23-6-2024 Nasr City" },
  ]);
  return (
    <DataContext.Provider
      value={{ onlineItems, setOnlineItems, offlineItems, setOfflineItems }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Context;
