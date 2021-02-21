import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./StateAssocation.css"


const StateAssocation = ({ stateAssocation, setStateAssocation}) => {
    return (
        <>
            <InputLabel id="state-assocation-label">State Assocation</InputLabel>
            <Select
                labelId="state-assocation-label"
                id="state-assocation"
                value={stateAssocation}
                onChange={(event) => {
                    setStateAssocation(event.target.value)
                    // console.log(event.target.value)
                }}
                className="state-assocation-dropdown"
            >
                <MenuItem value="GHSA">GHSA</MenuItem>
                <MenuItem value="UIL">UIL</MenuItem>
            </Select>
            {/* <label htmlFor="stateAssocation">State Assocation: </label>
            <select name="stateAssocation" onChange={(event) => {
                setStateAssocation(event.target.value)
                // console.log(event.target.value)
            }}>
                <option value="GHSA">GHSA</option>
                <option value="UIL">UIL</option>
            </select> */}
        </>
    );
}

export default StateAssocation;