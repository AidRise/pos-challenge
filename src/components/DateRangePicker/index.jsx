import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import "./DateRangePicker.css"
import { set } from 'date-fns/esm';

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate}) => {

    const [currentDate, setCurrentDate] = useState("");

    const getCurrentDate = () => {
        const today = moment().format("YYYY-MM-DD");
        setCurrentDate(today);
        console.log("Today: ", today);
    }

    useEffect(() => {
        getCurrentDate();
    }, []);

    return (
        <div className="DateRangePicker">
            <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue=""
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ min: currentDate }}
            />
            <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue=""
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ min: currentDate }}
            />
            {/* <label htmlFor="startDate">Start Date: </label>
            <input type="date" name="startDate" onChange={(event) => setStartDate(event.target.value)}/>

            <label htmlFor="endDate">End Date: </label>
            <input type="date" name="endDate" onChange={(event) => setEndDate(event.target.value)}/> */}
        </div>
    );
}

export default DateRangePicker;