import React from "react";
import StateAssociation from "../StateAssociation";
import DateRangePicker from "../DateRangePicker";
import "./MobileFilter.css"

const MobileFilter = ({ stateAssociation, setStateAssociation, startDate, setStartDate, endDate, setEndDate, filterVisible, setFilterVisible}) => {

    return (
        <div className={`mobile-filter-container ${filterVisible ? "" : "hide-filter"}`}>
            <div className="mobile-filter-header">
                <span>FILTER EVENTS</span>
                <span 
                    id="clear-filter-button"
                    onClick={() => {
                        setStateAssociation("GHSA");
                        setStartDate("");
                        setEndDate("");
                    }}
                >CLEAR ALL</span>
            </div>
            <div className="mobile-filter-content">
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
            </div>
            <div className="mobile-filter-footer">
                <div className="footer-cancel" onClick={() => {
                    setFilterVisible(false);
                }}>
                    Cancel
                </div>
                <div className="footer-apply" onClick={() => {
                    setFilterVisible(false);
                }}>
                    Filter Events
                </div>
            </div>
        </div>
    )
}

export default MobileFilter;