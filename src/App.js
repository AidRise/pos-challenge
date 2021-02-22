import React, { useState } from "react";

import Navbar from "./components/Navbar"
import StateAssociation from "./components/StateAssociation";
import DateRangePicker from "./components/DateRangePicker";
import DataTable from "./components/DataTable";
import ClearFilter from "./components/ClearFilter";
import MobileFilter from "./components/MobileFilter";

import "./App.css";

function App() {

  const [stateAssociation, setStateAssociation] = useState("GHSA");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className="events-header">
        <h3 className="events-header-title">Upcoming Events</h3>
        <div className="events-header-filter">
          <div className="desktop-filters">
            <StateAssociation
              stateAssociation={stateAssociation}
              setStateAssociation={setStateAssociation}
            />
            <DateRangePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <ClearFilter
              setStateAssociation={setStateAssociation}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="mobile-filters">
            <div className="mobile-filters-button" onClick={() => {
              setFilterVisible(true);
            }}>
              <span>FILTER</span>
            </div>
            <MobileFilter
              stateAssociation={stateAssociation}
              setStateAssociation={setStateAssociation}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              filterVisible={filterVisible}
              setFilterVisible={setFilterVisible}
            />
          </div>
        </div>
      </div>
      <DataTable
        stateAssociation={stateAssociation}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}

export default App;
