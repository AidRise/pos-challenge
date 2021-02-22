import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./StateAssociation.css"


const StateAssociation = ({ stateAssociation, setStateAssociation}) => {
    return (
        <div className="stat-Association-wrapper">
            <InputLabel id="state-Association-label">State Assoc...</InputLabel>
            <Select
                labelId="state-Association-label"
                id="state-Association"
                value={stateAssociation}
                onChange={(event) => {
                    setStateAssociation(event.target.value);
                }}
                className="state-Association-dropdown"
            >
                <MenuItem value="GHSA">GHSA</MenuItem>
                <MenuItem value="UIL">UIL</MenuItem>
            </Select>
        </div>
    );
}

export default StateAssociation;