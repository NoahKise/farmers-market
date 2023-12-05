import React from "react";

const marketSchedule = [
    {
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
    },
    {
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
    },
    {
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
    },
    {
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
    },
    {
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
    },
    {
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
    }
];

function MarketSchedule({ selectedDate }) {
    const dayOfWeek = new Date(selectedDate);
    dayOfWeek.setDate(selectedDate.getDate() + 1);
    const formattedDayOfWeek = dayOfWeek.toLocaleDateString('en-US', { weekday: 'long' });
    if (formattedDayOfWeek === "Friday") {
        return (
            <h2>No Market Today</h2>
        )
    } else return (
        <div>
            <h2>Market Schedule</h2>
            {marketSchedule.map((market) =>
                market.day === formattedDayOfWeek && (
                    <div key={market.day}>
                        <h3>{market.day}</h3>
                        <p>Location: {market.location}</p>
                        <p>Hours: {market.hours}</p>
                        <p>Booth: {market.booth}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default MarketSchedule;