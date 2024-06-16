//Dom(Document Object Model)
// document.getElementById("h").innerHTML = "Hello Samaresh";
// let ele = document.getElementById("A");
// ele.innerHTML = "<p>Hello</p>";
// console.log(ele);

// let ele = document.getElementsByClassName("cl");
// // console.log(ele);
// // ele[0].innerHTML = "by";
// for(let k in ele){
//     ele[k].innerHTML = "Sam";
// }

// let ele = document.getElementsByTagName("li");
// for(let k in ele){
//     ele[k].innerHTML = "Ram";
// }
// console.log(ele);

//Query selector
// let ele = document.querySelectorAll("p.intro");
// // ele.innerHTML = "Hello";
// for(let k in ele){
//     ele[k].innerHTML = "Hello";
// }
// console.log(ele);

//create and append
// let ele = document.getElementById("intro");
// let h1 = document.createElement("h1");

// h1.className ="try pi";
// h1.id = "intro1";

// let text = document.createTextNode("This is h1 tag");
// h1.appendChild(text);

// h1.textContent = "Content added";

// // ele.appendChild(h1);
// document.body.appendChild(h1);

// let para = document.getElementById("p1");
// console.log(para.textContent);

// let list1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "new list 5";
// list1.appendChild(item);

//insert before
// let list1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "new list 5";
// // let pos = list1.firstElementChild;
// let pos = list1.firstElementChild.nextElementSibling;
// list1.insertBefore(item,pos);

//remove child
// let parent = document.getElementById("list");
// let elm = parent.firstElementChild.nextElementSibling;
// parent.removeChild(elm);
// document.body.removeChild(parent);

//clone or copy
// let list1 = document.getElementById("list");
// let cloneElm = list1.cloneNode(true);
// console.log(cloneElm);
// cloneElm.id = "list2";
// document.body.appendChild(cloneElm);

//replace element
// let list1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "list 5";

// let replace = list1.firstElementChild.nextElementSibling;
// list1.replaceChild(item,replace);

//insert adjacent element
// let elm = document.getElementById("intro");
// let html = "<h1>new h1</h1>";
// elm.insertAdjacentHTML("beforebegin", html);

//attribute
// let btn = document.getElementById("btn");
// // btn.setAttribute("name","form1");
// // let val = btn.getAttribute("name");
// // let val = btn.removeAttribute("name");
// let val = btn.hasAttribute("name");
// console.log(val);

//Dom Event
// function btn_click(){
//     alert("button was click!");
// }
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     console.log("button was click!");
// });
// btn.addEventListener("mouseover",function(){
//     console.log("mouse over is activated");
// });
// btn.addEventListener("mouseout",function(){
//     console.log("mouse out is activated");
// });

//remove eventListner
// function click1(){
//     console.log("click1 is activated");
// }
// function click2(){
//     console.log("click2 is activated");
// }
// btn.addEventListener('click',click1);
// btn.addEventListener('click',click2);
// btn.removeEventListener('click',click2);

//page load event
// window.addEventListener('DOMContentLoaded',function(){
//     console.log("DOM tree crated");
// });
// let img = document.getElementById("image1");
// img.addEventListener('load',function(){
//     console.log("fully loaded");
// });

//mouse event
// function fun(){
//     // alert("right click event");
//     alert("double click event");
// }
// let btn = document.getElementById("box");
// // btn.addEventListener('contextmenu',fun);
// btn.addEventListener('dblclick',fun);

//input event
// let x = document.getElementById("myinput");
// x.addEventListener('focus',myFocusFunction);
// x.addEventListener('blur',myBlurFunction);

// // x.addEventListener('change', function(){
// //     console.log(this.value);
// // });

// x.addEventListener('input', function(){
//     console.log(this.value);
// });

// function myFocusFunction(){
//     x.style.background = "yellow";
// }
// function myBlurFunction(){
//     x.style.background = "white";
// }

//Event Bubbling & Event Capturing
// let d = document.getElementById("myDiv");
// let b = document.getElementById("btn");

// b.addEventListener('click',btnClick);
// d.addEventListener('click',divClick);
// document.body.addEventListener('click',bodyClick);

// function btnClick(event){
//     console.log("button clicked...");
//     event.stopPropagation();
// }
// function divClick(){
//     console.log("div clicked...");
// }
// function bodyClick(){
//     console.log("body clicked...");
// }

//Prevent Default
// let link = document.getElementById("anchor");
// link.addEventListener('click',function(e){
//     console.log("link clicked...");
//     e.preventDefault();
// })

//Bom(Browser Object Model)
// var a = "hello...";
// console.log(window.a);

// function xyz(){
//     console.log("hi...");
// }
// window.xyz();
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// let btn = document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// let url = "https://www.google.com";
// let feature = "height=500,width=500";

// btn.addEventListener('click', function(){
//     window.open(url, 'google', feature);
// });

// btn1.addEventListener('click', function(){
//     window.open('https://www.facebook.com', 'google');
// })

//setTimeout & clearTimeout (only one time executed)
// let timeoutId = setTimeout(myfun, 5000);
// function myfun(){
//     console.log("Hello");
// }
// clearTimeout(timeoutId);

//setInterval & clearInterval (repeatedly executed)
// let t1 = setInterval(myfun, 300);
// function myfun(){
//     console.log("hello");
// }
// let btn = document.getElementById("btn");
// btn.addEventListener('click', function(){
//     clearInterval(t1);
// })

//location Object
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);
// function fun(){
//     window.location = "https://www.google.com";
//     location.href = "https://www.google.com";
//     location.assign("https://www.google.com");
//     location.replace("https://www.google.com");
//     location.reload(); 
// }

//Navigator object
// console.log(navigator.cookieEnabled);

//Screen Object
// console.log(screen.width);
