const singleton = require("./singleton");

let test1 = singleton.getInstance();

let test2 = singleton.getInstance();

console.log(test1 === test2);
