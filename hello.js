//  require() function is used to import , which is a built-in function of javascript

const math = require("crypto")  // const {add,sub} = requre('./math') 
// if we give it with ./ - it will search in the current directory 
//  if we give the name directly then it will search in its in-built packages

// console.log(add(10,20));
// console.log("Math value is ",math.subFn(2,4)); // console.log(math.add(2,4) || math.sub(2,4))

console.log("Math Value is: ", math);
