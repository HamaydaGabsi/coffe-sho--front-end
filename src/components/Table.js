import React from "react";
import "../styles/tableStyles.css";

const Table = ({ state }) => {
  let className = "";

  switch (state) {
    case "empty":
      className = "table empty";
      break;
    case "waiting":
      className = "table waiting";
      break;
    case "served":
      className = "table served";
      break;
    default:
      className = "table default";
  }

  return (
    <div>
      <div className={className}>
        {state === "empty" ? state : null}
        {state !== "empty" && state}
      </div>
    </div>
  );
};

export default Table;
