// var
var a = 10;
// var can be redeclare
var a = 12;
var b = "Pranav";
var c = null;
var d = undefined;
// console.log(a);
{
    //block can be update the global variable
    var a = 30;
    // console.log(a);
}
// console.log(a);

let p = 100;
console.log(p);
{
    let p = 20;
    console.log(p);
}
// can't redeclare the variable
// let p = 200;
p = 200;
console.log(p);


const author = "Pranav";
console.log(author);
// const are contant variable can't change this value
// author = "Om";
// console.log(author);


