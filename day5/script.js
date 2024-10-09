// "use strict";
// let $=4
// const _ =5
// let d=[2,4,4,5]
// function display()
// {
//   console.log($,_)
// }
// let e={
//   name:"Arun",
//   id:12,
// }
// let f=true
// let x="12"/'2'
// console.log(x)
// display()
// console.log(typeof($))
// console.log(typeof(_))
// console.log(typeof("hii"))
// console.log(typeof(d))
// console.log(typeof(e))
// console.log(typeof(f))
// let bol=true;
// let str=String(bol);
// console.log(str.charAt(0))
// function display()
// {
// let x=confirm("Are you sure")
// alert("user Selected "+x)
// }
// display()
// function display()
// {
//   let x=prompt("Enter your Name");
//   alert("Hi your Name is "+x)
// }display()
// let a=12
// let b="12.0"
// console.log(a==b)
// console.log(a===b)
function validate()
{
  var login=document.getElementById("login").value;
  var pass=document.getElementById("pass").value;
  var p1=document.getElementById("result")
  if(login=="shivamindian701@gmail.com" && pass=="123456")
  {
       p1.innerText="Login Succesful"
  }else
  {
    p1.innerText="login Failed"
  }return false;
}
function clear()
{
  document.getElementById("login").value="";
  document.getElementById("pass").value="";
  return false
}