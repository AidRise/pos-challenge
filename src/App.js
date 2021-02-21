import React, { useState } from "react";

import Navbar from "./components/Navbar"
import StateAssocation from "./components/StateAssocation";
import DateRangePicker from "./components/DateRangePicker";
import DataTable from "./components/DataTable";
import ClearFilter from "./components/ClearFilter"

import "./App.css";

function App() {

  const [stateAssocation, setStateAssocation] = useState("GHSA");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log(startDate, endDate)
  return (
    <div className="App">
      <Navbar />
      <div className="events-header">
        <h3 className="events-header-title">Upcoming Events</h3>
        <div className="events-header-filter">
          <StateAssocation
            stateAssocation={stateAssocation}
            setStateAssocation={setStateAssocation}
          />
          <DateRangePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <ClearFilter
            setStateAssocation={setStateAssocation}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
      <DataTable
        stateAssocation={stateAssocation}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}

export default App;
