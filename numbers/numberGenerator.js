//import fs module
const fs = require("fs");

//Function to get the random phone number.
let phoneNumber = () => {
  const num = 9413;
  const min = 100000;
  const max = 999999;

  const nextNum = Math.floor(Math.random() * (max - min + 1)) + min;

  storeNumber("phoneNumber.txt", `${num}${nextNum}`);
};

//Function to store the data in file
let storeNumber = (fileName, data) => {
  data = `${data}\n`;

  //Append the data specified file
  fs.appendFile(fileName, data, "utf-8", (err) => {
    if (err) throw err;
    console.log("Data is Stored");
  });
};

module.exports = {
  phoneNumber,
};
