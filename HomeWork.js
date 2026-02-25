import cube from "./js/hw/HW-defaultExport.js"

console.log(cube(4));


import {degree, alwaysPositive} from "./js/hw/HW-nameExport.js"

console.log(degree(2, 4))
console.log(alwaysPositive(-9))


import {add, subtract, multiply, divide} from "./js/hw/HW-nameObjectExp.js"

console.log(add(75, 5));
console.log(subtract(55, 10));
console.log(multiply(9, 10));
console.log(divide(200, 10));

import * as myFn from "./js/hw/HW-nameSpace.js"

console.log(`${myFn.kilometersToMiles(274)} km`);