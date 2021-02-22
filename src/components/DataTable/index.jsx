import React, { useState, useEffect } from "react";
import EventCard from "../EventCard";
import "./DataTable.css";

const DataTable = ({ stateAssociation, startDate, endDate}) => {

    const [events, setEvents] = useState([]);
    const [endpointURL, setEndpointURL] = useState("");

    const getEvents = async () => {
        let response = await fetch(endpointURL).catch((error) => console.log(error));

        let events = await response.json();

        setEvents(events.items);
    };

    const setEndpoint = () => {
        if (stateAssociation === "GHSA") {
            if (startDate && endDate) {
                setEndpointURL(`https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0&from=${startDate}T21:00:00.000Z&to=${endDate}T21:00:00.000Z`);
                return;
            }
            setEndpointURL("https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0");
        } else if (stateAssociation === "UIL") {
            if (startDate && endDate) {
                setEndpointURL(`https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=542bc38f95&card=true&size=50&start=0&from=${startDate}T21:00:00.000Z&to=${endDate}T21:00:00.000Z`);
                return;
            }
            setEndpointURL("https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=542bc38f95&card=true&size=50&start=0");
        }
    };



    useEffect(() => {
        setEndpoint();
        getEvents();
    }, [stateAssociation, startDate, endDate, endpointURL]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="data-table">
            <div className="data-table-events">
                {events.map((event) => {
                    return (
                        <div className="event-item" key={event.key}>
                            <EventCard
                                event={event}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DataTable;