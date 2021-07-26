import React from "react";
import { RiAndroidLine } from "react-icons/ri";
import "./List.css";
const List = (props) => {
  return (
    <li className={`apps-list ${props.className ? props.className : ""}`}>
      <div>
        <RiAndroidLine className="icon"></RiAndroidLine>
        <h4>{props.name}</h4>
        <div className="eventSvg">{props.toggle}</div>
      </div>
      {props.details ? (
        <h5>
          Weekdays: <span>{props.details.weekdays}hr</span> Weekends:{" "}
          <span>{props.details.weekends}hr</span>{" "}
        </h5>
      ) : null}
    </li>
  );
};

export default List;
