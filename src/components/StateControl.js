import React from "react";
import DateComponent from "./Date";
import MarketSchedule from "./MarketSchedule";
import ProduceAvailable from "./SeasonalProduce";

class StateControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
        };
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;

        return (
            <div>
                <DateComponent onDateChange={this.handleDateChange} />
                {selectedDate && (
                    <React.Fragment>
                        <MarketSchedule selectedDate={selectedDate} />
                        <ProduceAvailable selectedDate={selectedDate} />
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default StateControl;