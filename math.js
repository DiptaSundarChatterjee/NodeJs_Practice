// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }
// module.exports is used to export the functions so that it can be used by other files
// module.exports = {
//     addFn : add,
//     subFn: sub

// }

//  OR


exports.add = (a,b) =>a+b;
exports.sub = (a,b) =>a-b;

module.exports={add,sub}   //mostly prefered