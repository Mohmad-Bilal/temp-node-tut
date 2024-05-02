// npm - global command, comes with node
// npm --versin

// local dependency - use it only in ths particular project
// npm i <packageName>

// global dependency - use it in any project
// npm insttal -g <packagName>

// package.json - manifest file (store mportant info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
console.log("hello my bros");
