import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import "./DateRangePicker.css"

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate}) => {

    const [currentDate, setCurrentDate] = useState("");

    //Get current date as a min value for calendars
    const getCurrentDate = () => {
        const today = moment().format("YYYY-MM-DD");
        setCurrentDate(today);
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
        </div>
    );
}

export default DateRangePicker;