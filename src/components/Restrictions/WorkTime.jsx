import React, { useContext, useEffect, useState } from "react";
import List from "../List/List";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Context } from "../../Assets/Store";

import "./WorkTime.css";

const WorkTime = (props) => {
  const [input, setInput] = useState("");
  const [appsData, setAppsData] = useContext(Context);
  const [blockedApplications, setBlockedApps] = useState(
    appsData[0].blockedApps
  );
  const [applications, setAllApps] = useState(appsData[0].allApps);

  const AddBlockedApp = (id) => {
    const newBlockedApp = applications.find((app) => app.id === id);
    setBlockedApps((prev) => [...prev, newBlockedApp]);
    setAllApps(applications.filter((app) => app.id !== id));
  };

  useEffect(() => {
    setAppsData((prev) => [
      { ...prev[0], allApps: applications, blockedApps: blockedApplications },
    ]);
  }, [applications, blockedApplications,setAppsData]);

  const UnblockApp = (id) => {
    const removedApp = blockedApplications.find((app) => app.id === id);
    setBlockedApps(blockedApplications.filter((app) => app.id !== id));
    setAllApps((prev) => [...prev, removedApp]);
  };


  return (
    <div className="workTime">
      <div>
        <h3>Blocked Apps {blockedApplications.length}</h3>
        <ul>
          {blockedApplications.map((app) => (
            <List
              key={app.id}
              name={app.name}
              toggle={
                <AiOutlineMinus
                  onClick={() => {
                    UnblockApp(app.id);
                  }}
                ></AiOutlineMinus>
              }
            ></List>
          ))}
        </ul>
      </div>
      <div>
        <h3>Other Installed Apps {applications.length}</h3>
        <input
          placeholder="Search Apps"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <ul>
          {applications
            .filter((app) => {
              if (input === "") {
                return app;
              } else if (app.name.toLowerCase().includes(input.toLowerCase())) {
                return app;
              }
            })
            .map((app) => (
              <List
                key={app.id}
                name={app.name}
                toggle={
                  <AiOutlinePlus
                    onClick={() => {
                      AddBlockedApp(app.id);
                    }}
                  ></AiOutlinePlus>
                }
              ></List>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkTime;
