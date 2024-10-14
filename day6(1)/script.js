// let a=()=>{
//  console.log("Arrow Function");
// };
// let b=()=>console.log("Arrow Function 2");
// const c=(x,y)=>x+y;
// a();
// b();
// console.log(c(5,6));
// function display()
// {
  // let p1=document.querySelector('p');
  // let p1=document.querySelectorAll('p');
  // p1[0].innerHTML="Hi How are you";
  // p1[0].style.backgroundColor="red";
  // p1[1].innerHTML="Second para";
//   p1[1].style.backgroundColor="grey";
// }
// let changeheader=()=>
// {
//   let head1=document.querySelector("h1");
//   head1.textContent="Change the Title";
//   // head1.textContent="2";
//   let a1=document.querySelector("a");
//   a1.setAttribute("href","https://aktu.ac.in");
//   a1.innerHTML="Aktu Website";
// };
// let addContent=()=>
// {
//   const newDiv=document.createElement('div');
//   newDiv.textContent="This is a new Div";
//   const body=document.querySelector('body');
//   body.appendChild(newDiv);
// };
// const button1=document.querySelector('button');
// button1.addEventListener('mouseover',()=>{
//   document.querySelector('body').style.backgroundColor="red"
// });
const handleClick=()=>
{
  document.getElementById('btn').style.translate='20rem 0';
}
let btn=document.getElementById('btn');
btn.addEventListener('click',handleClick);