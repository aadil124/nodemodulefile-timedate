//import fs module
const fs = require("fs");

//Function to get the current indian time and date.
let indianWatch = () => {
  let today = new Date();
  let options = { timezone: "Asia/Kolkata" };

  //Get the current time in indian timezone
  let time = today.toLocaleTimeString("en-US", options);

  //Get the current Date in indian timezone
  let date = today.toLocaleDateString("it-IT", options);

  //store the data inside
  storeData("indianWatch.txt", `${date} ${time}`);
};

//Function to get the current USA time and date.
const usaWatch = () => {
  const today = new Date();
  // USA have more than one timezones
  const optionsUSA = { timeZone: "America/New_York" };

  const timeUSA = today.toLocaleTimeString("en-US", optionsUSA);
  const dateUSA = today.toLocaleDateString("en-US", optionsUSA);

  // for create the data into directory
  storeData("usaWatch.txt", `${dateUSA} ${timeUSA}`);
};

//Function to get the current China time and date.
const chinaWatch = () => {
  const today = new Date();
  // As per https://timezonedb.com/time-zones
  // China has two timezone
  // const optionsChina = { timezone: "Asia/Urumqi" };
  const optionsChina = { timeZone: "Asia/Shanghai" };

  const timeInChina = today.toLocaleTimeString("en-CN", optionsChina);
  const dateInChina = today.toLocaleDateString("en-CN", optionsChina);

  storeData("chinaWatch.txt", `${dateInChina} ${timeInChina}`);
};
//Function to store the data in file
let storeData = (fileName, data) => {
  data = `${data}\n`;

  //Append the data specified file
  fs.appendFile(fileName, data, "utf-8", (err) => {
    if (err) throw err;
    console.log("Data is Stored");
  });
};

//Export the indianWatch function as module
module.exports = {
  indianWatch,
  usaWatch,
  chinaWatch,
};
