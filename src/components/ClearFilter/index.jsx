import React from "react";

const ClearFilter = ({ setStateAssocation, setStartDate, setEndDate}) => {
    return (
        <button onClick={() => {
            setStateAssocation("GHSA");
            setStartDate("");
            setEndDate("");
        }}>Clear Filter</button>
    );
}

export default ClearFilter;