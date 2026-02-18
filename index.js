import User from "./js/defaultExport.js"; //default

const user = new User('Bogdan', '16')
console.log(user);


import {square, circle} from "./js/nameExport.js"

console.log(square(10, 15));
console.log(circle(5));


import {add, subtraction} from "./js/nameObjectExp.js"

console.log(add(10, 10));
console.log(subtraction(15, 10));

import * as myModule from "./js/nameSpace.js"

console.log(myModule.div(10, 5))
console.log(myModule.mul(10, 5))