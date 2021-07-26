import { createContext, useState } from "react";
import { apps } from "./ScheduleData";

export const Context = createContext();

const Store = ({ children }) => {
  const [appsData, setAppsData] = useState(apps);

  return (
    <Context.Provider value={[appsData, setAppsData]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
