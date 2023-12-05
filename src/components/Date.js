import React from "react";

function DateComponent({ onDateChange}) {
    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value)
        onDateChange(selectedDate);
    };

    return (
        <form>
            <label htmlFor="date-input">Date:</label>
            <input
                type="date"
                id="date-input"
                onChange={handleDateChange}
            />
        </form>
    );
}

export default DateComponent;