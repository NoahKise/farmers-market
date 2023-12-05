import React from "react";

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

const monthNames = [
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

function ProduceAvailable({ selectedMonth }) {
   const filteredProduce = availableProduce.find(
      (month) => month.month.toLowerCase() === monthNames[selectedMonth].toLowerCase()
   );

   return (
      <div>
         <h2>Available Produce</h2>
         {filteredProduce && (
            <div>
               <h3>{filteredProduce.month}</h3>
               <ul>
                  {filteredProduce.selection.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}

export default ProduceAvailable;