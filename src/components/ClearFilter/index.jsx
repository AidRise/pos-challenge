import React from "react";
import "./ClearFilter.css"

const ClearFilter = ({ setStateAssociation, setStartDate, setEndDate}) => {
    return (
        <div className="desktop-clear-filter">
            <span
                id="clear-filter-button"
                onClick={() => {
                    setStateAssociation("GHSA");
                    setStartDate("");
                    setEndDate("");
                }}
            >CLEAR ALL</span>
        </div>
    );
}

export default ClearFilter;