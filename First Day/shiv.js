// var x = 1;
// var y=2;
// var z=x+y;
// console.log(z);
// console.log();
// var str="hello";
// console.log(str);
// var str2="cello";
// var s=str+" "+str2;
// var g=1223
// var c=1223;
// console.log(g===c)
// console.log(s.length)
// var a=true;
// var b=false;
// console.log(a,b);
// var c="2324692365";
// console.log(typeof(a))
// var x=20;
// +,-,*,/,%
// console.log(x%11);ans=9

//comparision operator
//< checking less than
// ,> checking greater than,<= less than equal ,>= greater than equal,== equal,=== ,!=,!==
// var a=3;
// console.log(a!=="3")
// var x="8375982";
// console.log(typeof(x));
// how to string convert into number
// x=+x;
// x=Number(x);
// console.log(typeof(x));
// console.log(a==="3")

//conditional statements
//1.if conditional statements
// if(conditional){
//     statements;
// }
// var x=20;
// x=30;
// if(x>20){
//     x=x+1;
// }
// console.log(x);x=31

// if-else conditional statements
// if(conditional){
//     statements;
// }else{
//  statements
// }
/*var a="shiv shambhu";
a=a+true;
console.log(typeof(a))*/
// var x=20;
// if(x>20){
//     console.log("my name is hero")
// }else{
//     x=x+1;
//     console.log("my name is shole : "+x)
// }

// if- else if-else condition

// var a=40;
// if(a<30){
//     console.log("hera pheri");
// }else if(a<50){
//     console.log(a);
// }else{
//     console.log("bye bye");
// }
// console.log(1)
// loops: loops are used to perform repeated task;
// 1.while (condition) {
    // statements;
// }
// increment 
//1.pre increment ++a;
//2.post increment a++;
// var a=1;
// Decrement
// 1. pre decrement --a;
//2. post decrement a--;

// console.log(++a);==2
// console.log(a++);//==1
// console.log(a);
// while(a<=20){
//     console.log(a)
//     a++;
// }

// 2. for (initialization; condition; increment/decrement) {
//     const element = array[index];
    
// }

// for(var i=1; i<=20; i++){
//     console.log(i);
// }
// var
// let
// const

// for(var i=20; i>=1; i--){
//     console.log(i);
// }
// console.log("out of the loop"+" "+i);
//i=20 so 20>=0 true print 20;i=i-1=19>=1 true print 19 i=i-1=18>=1

// nested loop: loop inside the loop
// for(let i=0; i<4; i++){
//     for(let j=0; j<4; j++){
//         console.log("*");
//     }
// }

//1. program for printing "Hello World"

// var str="hello world";
// console.log("Hello World");

// console.log("My name is Khan");

// program2. print age
// var age = 17;
// console.log("my age is: "+ age);

// program3. take two variables store the integer value to each variable and print addtion, substraction, multipication division and modulus
// var a=6;
// var b=3;
// var addition=a+b;
// var sub=a-b;
// var mult=a*b;
// var div=a/b;
// var mod=a%b;

// console.log(a+"\n"+b+"\n"+addition+"\n"+sub+"\n"+mult+"\n"+div+"\n"+mod);

// console.log(a);
// console.log(b);
// console.log(addition);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(mod);

// Please two variables store interger value in each and print "Hurray!" if first variable is greater than 2nd else print "Alas!"...........
// Datatype
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.

// use of comparision operator 
// 1. < for checking two variables are one is less than other.


var x=5;
var y=6;

// the === & !== used to check equal as well as datatype;
// console.log("Pandit Ji ki Churkaiya");
// var z=x<y;
// console.log(x<y);
// console.log(x>y);
// console.log(x==y);
// console.log(x!=y);
// console.log(x!==y)
document.getElementById("start")
var x=0;
var min=0;
var hour=0;
var a=document.getElementById("second");
var id=setInterval(function(){
    if(x==60){
        min++;
        document.getElementById("min").innerText=min;
        x=0;
    }
    if(min==60){
        hour++;
        document.getElementById("hour");
        min=0;
    }
a.style.fontSize="50px";

    a.innerText=x; 
    x++;
    
},1000)




