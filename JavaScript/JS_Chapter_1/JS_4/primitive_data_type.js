//primitive
//n - null, number
//s - String, symbol
//b - boolean, bigint
//u - undefined


let a = null;
let b = 350;
let c = true; //can also be false
let d = BigInt(350) + BigInt(10);
let e = "Hello Sir";
let f = Symbol("MH");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);



//non primitive
//object

const item1 = {
    "Pranav" : 22,
    "Yash" : 21,
    "Kunal" : 19,
    "Sujal" : 16
}

const item2 = {
    "Pranav" : true,
    "Yash" : false,
    "Kunal" : "Mahajan",
    "Sujal" : undefined
}

console.log(item1["Pranav"]);  //in js is object and in python is dictonary

console.log(item2["Sujal"]);
console.log(item2["Pranav"]);

