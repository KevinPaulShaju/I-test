import React, { useState } from "react";
import "./Restrictions.css";

import WorkTime from "./WorkTime";
import NonWorkTime from "./NonWorkTime";

const Restrictions = () => {
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [isNonWorkTime, setIsNonWorkTime] = useState(false);

  const showWorkTime = () => {
    setIsWorkTime(true);
    setIsNonWorkTime(false);
  };
  const showNotWorkTime = () => {
    setIsWorkTime(false);
    setIsNonWorkTime(true);
  };

  return (
    <div className="container">
      <h2>Restrictions</h2>
      <div className="buttons">
        <button onClick={showWorkTime} className={isWorkTime ? `active` : ""}>
          Work Time
        </button>
        <button
          onClick={showNotWorkTime}
          className={isNonWorkTime ? `active` : ""}
        >
          Non-Work Time
        </button>
      </div>
      {isWorkTime && <WorkTime></WorkTime>}
      {isNonWorkTime && <NonWorkTime></NonWorkTime>}
    </div>
  );
};

export default Restrictions;
