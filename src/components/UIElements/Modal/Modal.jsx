import React, { Fragment, useContext} from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../../Assets/Store";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  const [appsData, setAppsData] = useContext(Context);
  let { name, limit, id } = props.edit;
  let weekdayInput = "";
  let weekendInput = "";
  if (limit) {
    weekdayInput = limit.weekdays;
    weekendInput = limit.weekends;
  }

  const weekdayChangeHandler = (e) => {
    weekdayInput = e.target.value;
  };

  const weekdendChangeHandler = (e) => {
    weekendInput = e.target.value;
  };

  const submitHandler = () => {
    if (weekdayInput === "" && weekendInput === "") {
      props.onCancel();
      return;
    }
    const newLimits = {
      weekdays: weekdayInput,
      weekends: weekendInput,
    };

    if (props.edit.limit) {
      props.edit.limit = newLimits;
      let limitedApps = appsData[0].limitedApps;
      let foundIndex = limitedApps.findIndex((app) => app.d === id);
      limitedApps[foundIndex] = props.edit;
      setAppsData([{ ...appsData[0], limitedApps: limitedApps }]);
    } else if (!props.edit.limit) {
      props.edit.limit = newLimits;

      let filteredApps = appsData[0].allApps.filter((app) => app.d !== id);
      let limitedApps = appsData[0].limitedApps;
      limitedApps.push(props.edit);
      setAppsData([
        { ...appsData[0], limitedApps: limitedApps, allApps: filteredApps },
      ]);
    }
    weekdayInput = "";
    weekendInput = "";
    props.onCancel();
  };

  return (
    <Fragment>
      <Backdrop onClick={props.onCancel}> </Backdrop>

      <div className="modal-content">
        <div className="modal-header">
          <h2>{props.header}</h2>
          <span className="close" onClick={props.onCancel}>
            <AiOutlineClose></AiOutlineClose>
          </span>
        </div>
        <div className="modal-body">
          <h2>{name}</h2>
          <div className="time-picker">
            <form action="/action_page.php">
              <div className="times">
                <label htmlFor="appt">Weekdays</label>
                <input
                  onChange={weekdayChangeHandler}
                  defaultValue={weekdayInput ? weekdayInput : "00:00"}
                  type="time"
                  name="appt"
                />
              </div>
              <div className="times">
                <label htmlFor="appt">Weekends</label>
                <input
                  onChange={weekdendChangeHandler}
                  defaultValue={weekendInput ? weekendInput : "00:00"}
                  type="time"
                  name="appt"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={submitHandler}>Save</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
