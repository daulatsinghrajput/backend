// let a = 12;
// module.exports = a;

let a = 12;
let b = 24;

module.exports = {a,b};   // only one time use in a file 

// second way 

module.exports.a = a;
module.exports.b = b;
