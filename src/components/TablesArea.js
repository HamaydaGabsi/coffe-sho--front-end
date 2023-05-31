import { React, } from "react";
import Table from "./Table";
import "../styles/tablesAreaStyles.css";
import { Link } from "react-router-dom";

const TablesArea = () => {
  // Define the table data
  const tables = [
    { id: 1, state: "empty" },
    { id: 2, state: "waiting" },
    { id: 3, state: "served" },
    // Add more tables as needed
  ];

  // Handle state change for a table
  return (
    <div className="">
      <div className="tables-container tables-area">
        {tables.map((table) => (
          <Link
            to={table.state === "empty" ? "menu" : null}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Table key={table.id} state={table.state} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TablesArea;
