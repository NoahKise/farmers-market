import React from "react";
import PropTypes from "prop-types";

const styling = {
   border: "3px solid black",
   width: "300px",
   marginLeft: "auto",
   marginRight: "auto",
   background: "linear-gradient(162deg, rgba(255,129,129,1) 37%, rgba(255,152,0,1) 64%)"
}

const availableProduce = [
   {
      month: "January",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   },
   {
      month: "February",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "March",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "April",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Garlic",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "May",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Cauliflower",
         "Garlic",
         "Lettuce",
         "Potatoes",
         "Radishes"
      ]
   },
   {
      month: "June",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Blackberries",
         "Cherries",
         "Raspberries",
         "Strawberries",
         "Asparagus",
         "Broccoli",
         "Cauliflower",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash"
      ]
   },
   {
      month: "July",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Raspberries",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "August",
      selection: [
         "Apples",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Rhubarb",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "September",
      selection: [
         "Apples",
         "Blueberries",
         "Grapes",
         "Melons",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "October",
      selection: [
         "Apples",
         "Grapes",
         "Hazelnuts",
         "Melons",
         "Peaches",
         "Pears",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Pumpkins",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "November",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "December",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   }
];

function ProduceAvailable({ selectedDate }) {
   const month = new Date(selectedDate);
   month.setDate(selectedDate.getDate() + 1);
   const formattedMonth = month.toLocaleDateString('en-US', { month: 'long' });
   const filteredProduce = availableProduce.find(
      (month) => month.month === formattedMonth
   );

   if (month.getDay() === 5) {
      return null;
   } else return (
      <div style={styling}>
         <h2>Available Produce</h2>
         {filteredProduce && (
            <div>
               <h3>{filteredProduce.month}</h3>
               <ul id="list">
                  {filteredProduce.selection.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}

ProduceAvailable.propTypes = {
   selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default ProduceAvailable;