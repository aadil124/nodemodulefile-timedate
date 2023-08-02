const watch = require("./watches/digitalWatches");
const phoneNum = require("./numbers/numberGenerator");

// setInterval(watch.indianWatch, 1000);
setInterval(watch.usaWatch, 1000);
setInterval(watch.chinaWatch, 1000);
setInterval(phoneNum.phoneNumber, 1000);
