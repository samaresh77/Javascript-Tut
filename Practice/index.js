// console.log("Hello World!");
// alert("Hello World");
// document.write("Hello World");
// document.getElementById("h").innerHTML="Samaresh";

// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     document.write(i);
//     document.write("<br>");
// }

// prompt("Enter Your Age...");
// let res = confirm("Are you delete the message?");
// if(res){
//     document.write(`Deleted`);
// }
// else{
//     document.write(`Not Deleted`);
// }

// let str = "Sam";
// document.write(typeof(str)+"<br>");

// document.write(`Hi, ${str}`);

// let book = ['Math','physics','bio','cs'];
// // let book = new Array('Math','physics','bio','cs');
// document.write(book[1]);

// function A(n1,n2){
//     document.write(n1+n2);
// }
// A(7,6,3,4);

// Anonymous Function-->which has no name
//uses-when one time uses
//function expression
// let a = function(){
//     document.write("A");
// };
// a();
// setTimeout(function(){
//     console.log("Hello!");
// },5000);

//Immediately invoked function-->called the function immediately without making variables
// (function(){
//     console.log("Hello!");
// })();

//Object
//let person = new Object();
// let person = {
//     firstName: 'Sam',
//     lastName: 'Mon',
//     work: function(){
//         console.log("studing...");
//     }
// };
// // person.age = 25;
// // person.firstName = 'Ram';
// // delete person.lastName;
// // console.log(person);
// // console.log(person['firstName']);
// // console.log(person.function());
// // console.log(person.age);

// //forEach loop
// for(let key in person){
//     console.log(key + ": "+person[key]);
// }

//Math
// let x = Math.random();//0 to 1
// console.log(x);

//Date object
// let x = new Date();
// let y = new Date(1960,11,31,10,33);
// console.log(x);
// console.log(y);

//getter & setter
// var person = {
//     name: 'Samaresh',
//     id: 213,
//     // getName: function(){
//     //     return this.name.toUpperCase();
//     // }
//     // get getName(){
//     //     return this.name.toUpperCase();
//     // },
//     set setName(n){
//         this.id = n;
//     }
// }
// person.setName = 100;
// console.log(person);
// // console.log(person.getName);

//Object constructor function
// function Student(fn,ln,age,cls){
//     this.fn = fn;
//     this.ln = ln;
//     this.age = age;
//     this.cls = cls;
// }
// var Student1 = new Student("Sam","Mon",50,"V");
// Student1.nationality = "Indian";
// console.log(Student1);

//nested Object
// var user = {
//     id: 101,
//     email: "abc@gmail.com",
//     personalInfo: {
//         name: "abc",
//         age: 23,
//         address: {
//             street: "har",
//             city: "Delhi",
//             country: "India"
//         }
//     }
// }
// console.log(user);

// Hoisting-->means pull or lift
// hello();
// function hello(){
//     console.log("a");
// }
// x=10;
// console.log(x);
// // let x = 20;
// var x;