import React, { Fragment, useContext, useState } from "react";
import { apps } from "../../Assets/ScheduleData";
import List from "../List/List";
import { BiCommentEdit } from "react-icons/bi";
import { Context } from "../../Assets/Store";

import "./WorkTime.css";
import Modal from "../UIElements/Modal/Modal";

const NonWorkTime = (props) => {
  const [appsData, setAppsData] = useContext(Context);
  const [editApp, setEditApp] = useState();
  const [limitedApplications, setLimitedApps] = useState(
    appsData[0].limitedApps
  );
  const [openModal, setOpenModal] = useState(false);
  const editLimitHandler = (id) => {
    setOpenModal(true);
    const AppToEdit = limitedApplications.find((app) => app.id === id);
    setEditApp(AppToEdit);
  };

  const cancelModal = () => {
    setOpenModal(false);
    setEditApp();
  };

  return (
    <Fragment>
      {openModal && (
        <Modal
          header="Edit Limit"
          edit={editApp}
          onCancel={cancelModal}
        ></Modal>
      )}
      <div className="workTime">
        <div>
          <h3>Limited Apps {limitedApplications.length}</h3>
          <ul>
            {limitedApplications.map((app) => (
              <List
                details={app.limit}
                key={app.id}
                name={app.name}
                toggle={
                  <BiCommentEdit
                    onClick={() => {
                      editLimitHandler(app.id);
                    }}
                  ></BiCommentEdit>
                }
              ></List>
            ))}
          </ul>
        </div>
        <AllApps></AllApps>
      </div>
    </Fragment>
  );
};

const AllApps = () => {
  const [appsData, setAppsData] = useState(apps);
  const [applications, setAllApps] = useState(appsData[0].allApps);
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [limitApp, setLimitApp] = useState();

  const cancelModal = () => {
    setOpenModal(false);
  };

  const setLimitHandler = (id) => {
    setOpenModal(true);
    const AppToSet = applications.find((app) => app.id === id);
    setLimitApp(AppToSet);
  };

  return (
    <Fragment>
      {openModal && <Modal edit={limitApp} header="Set Limit" onCancel={cancelModal}></Modal>}

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
                toggle={
                  <button
                    onClick={() => {
                      setLimitHandler(app.id);
                    }}
                  >
                    Set Limit
                  </button>
                }
                key={app.id}
                name={app.name}
              ></List>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default NonWorkTime;
