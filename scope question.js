// 1.from  line number 1-9 all the var variables have a global scope b/c they have define globally.
//let  and const  have a script scope.
//accedental variable have global scope.b/c we dont declered them so it will automatically become a global variable

userName = "vaishali";
var city = "Bhopal";
var company = "TCS";
var state = "MP";
var lastCity = "Bangalore";
let a1 = "aniket";
const a2 = "shunnu";
a33 = 10;
window.a43 = 20;
//2. ---------------------------------------------------------------------------
//from line numer 18-23 var have a global scope and let and const have a block scope.
{
    var name33 = "vaishali";
    let a44 = 10;
    const w22 = 200;
    for (let i = 0; i < 8; i++) {
        var a = 10000;

    }
}
//-----------------------------------------------------------------------------
// 3.from line number 30-33 let var and const all have local scope b/c they all are inside a function
// and accedental variable have a global scope.
function tryMe1() {
    var name1 = "vaishali";
    const city1 = "Pune";
    let x = 10;
    window.y = 20;
}
tryMe1()
// 4.-------------------
var a3 = 10;
function tryMe2() {
    var a3 = 50;
    return a3;
}
tryMe2();
console.log("A: ", a3);//10

// 5.------------------------
var v = 50;
{
    var v = 70//var is in global scope here
}
console.log("@vt", v)//70 

// 6.----------------------------
var v1 = 50;
{
    v1 = 70
}
console.log("@vt56", v1)//70 we can reasssign a var variable

//7.-----------------------
var i = 60
function myFunc() {
    var i = 30 // here var is in local scope
    return i
}
myFunc()
console.log("@vt65", i)//60
// 8.-------------------------------
var i1 = 60
function myFunc1() {
    i1 = 30
    return i1
}
myFunc1()
console.log("@vt67", i1)//30 

//9..-----------------------
var j = 40
for (var j = 0; j < 8; j++) {
    var j = 60
}
console.log("@vt66", j)//61

// 10.-----------------------------
var j = 40
for (let j = 0; j < 8; j++) {
    j = 60 //or var j = 60
}
console.log("@vt87", j)//40 b/c let is in block scope and have a limited scope so it will give the value of var j

// 11.--------------------------------
// j = 40
// for (const j = 0; j < 8; j++) {
//     const j = 60 // cant assign in const error
// }
// console.log("@vt94", j)//61
// 12.--------------------- 

function myFunc1(a) {
    return 10
}
myFunc1(2)
console.log("@vt101", myFunc1(2))//10
// 13.---------------------------
let t1 = 60
function myFunc2() {
    t1 = 30
    return t1
}
myFunc2()
console.log("@vt83", t1)//30

// 14.------------------------
let e = 50
{
    let e = 80

}
console.log("@vt83", e)//50
// 15.------------------------------
let e1 = 50
{
    e1 = 80

}
console.log("@vt83", e1)//80
// 16.--------------------------
let e2 = 50
{
    let e2 = 80

}
console.log("@vt113", e2)//50

// 17.---------------------------
let a11 = 20;
function tryMe3() {
    a11 += 10;
}
tryMe3();
console.log("A11: ", a11);//30 we can reassign a let variable
// 18.--------------------------
var a12 = 20;
function tryMe5() {
    a12 += 10;
}
tryMe5();
console.log("A12: ", a12);//30 we can reassign a var variable
// 19.---------------------------
// const a13 = 20;
// function tryMe6() {
//     a13 += 10;
// }
// tryMe6();
// console.log("A13: ", a13);//  error cant reassign in const

// 20.--------------------------
let a14 = 20;
function tryMe7() {
    let a14 = 10;
}
tryMe7();
console.log("A14: ", a14);//20 