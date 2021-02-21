import React, { useState, useEffect } from "react";
import EventCard from "../EventCard";
import moment from "moment";
import "./DataTable.css";

const DataTable = ({ stateAssocation, startDate, endDate}) => {

    const [events, setEvents] = useState([]);
    // const [stateAssocationValue, setStateAssociationValue] = useState(stateAssocation);
    const [endpointURL, setEndpointURL] = useState("");

    const getEvents = async () => {
        // const ghsaKey = "18bad24aaa";
        // const uilKey = "542bc38f95";

        // if (stateAssocation === "GHSA") {

        // }
        // let endpoint = "https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0";
        let response = await fetch(endpointURL);
        console.log("endpoint: ", endpointURL);

        let events = await response.json();
        console.log('Events: ', events);

        setEvents(events.items);
    };

    const setEndpoint = () => {
        if (stateAssocation === "GHSA") {
            if (startDate && endDate) {
                setEndpointURL(`https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0&from=${startDate}T21:00:00.000Z&to=${endDate}T21:00:00.000Z`);
                return;
            }
            setEndpointURL("https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0");
        } else if (stateAssocation === "UIL") {
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
        console.log(stateAssocation)
    }, [stateAssocation, startDate, endDate, endpointURL]); // eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {
    //     getEvents();
    // }, [endpointURL]);

    return (
        <div className="data-table">
            {/* <div className="data-table-headers">
                <h3>Key</h3>
                <h3>Headline</h3>
                <h3>SubHeadline</h3>
                <h3>Start Time</h3>
            </div> */}
            <div className="data-table-events">
                {events.map((event) => {
                    return (
                        <div className="event-item" key={event.key}>
                            <EventCard
                                event={event}
                            />
                        </div>
                        // <div className="event-item" key={event.key}>
                        //     <p>{event.key}</p>
                        //     <p>{event.headline}</p>
                        //     <p>{event.subheadline}</p>
                        //     <p>{moment(event.date).format("MMMM Do YYYY, h:mm a")}</p>
                        // </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DataTable;