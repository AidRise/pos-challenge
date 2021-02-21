import React from "react";
import moment from "moment";
import "./EventCard.css"

const EventCard = ({event}) => {
    return (
        <div className="event-card grow">
            <div className="event-card-top">
                <div className="event-card-header">
                    <div className="event-headline">
                        <span>{event.headline}</span>
                    </div>
                </div>
                <div className="event-subheadline">
                    <p>{event.subheadline}</p>
                </div>
            </div>
            <div className="event-card-footer">
                <div className="event-start-time">
                    <p>
                        {moment(event.date).format("MMMM Do YYYY, h:mm a")}
                    </p>
                </div>
                <div className="event-key">
                    <span>{event.key}</span>
                </div>
            </div>
        </div>
    );
}

export default EventCard;