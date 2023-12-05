import React from "react";
import PropTypes from "prop-types";

function DateComponent({ onDateChange}) {
    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value)
        onDateChange(selectedDate);
    };

    return (
        <form>
            <label htmlFor="date-input">Date:</label>
            <br />
            <br />
            <input
                type="date"
                id="date-input"
                onChange={handleDateChange}
            />
        </form>
    );
}

DateComponent.propTypes = {
    onDateChange: PropTypes.func.isRequired,
};

export default DateComponent;