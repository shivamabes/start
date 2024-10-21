// let num=[1,2,3,4,45,5,45];
//map
// let newnum=num.map(x=>x*2)
// console.log(newnum)
//filter
// let evennum=num.filter(x=>x%2==0)
// console.log(evennum)
//reduce
// const sum=num.reduce((acc,initial_value)=>acc+initial_value,0);
// console.log(sum)
//product
// const product=num.reduce((acc,initial_value)=>acc*initial_value,1);
// console.log(product)
const students=[
  {name:"Alice",score:50},
  {name:"bob",score:65},
  {name:"charlie",score:80},
  {name:"David",score:45},
  {name:"Rahul",score:50},
];
// console.log(students[0].score)
// let scores=students.map(x=>x.score)
// console.log(scores)
// let sum=students.reduce((acc,initial_value)=>acc+initial_value.score,0)
// console.log(sum)

// let sum=students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0)
// console.log(sum)
//10 grace score
// let sum=students.filter(x=>x.score>60).reduce((x,y)=>x+y.score+10,0)
// console.log(sum)

// let num=[12,3,4,4,4,4,98];
// num.forEach(x=>console.log(x*3))

//callback function: function passed as an argument to another function
// sayhello=()=>
// {
//   console.log("I am in hello Function")
// }
// console.log("Start")
// setTimeout(sayhello, 3000);
// console.log("End")

console.log("start")
setTimeout(() => {
  console.log("first task completed");
  setTimeout(() => {
    console.log("second task completed");
    setTimeout(() => {
      console.log("third task completed");
    }, 3000);
  }, 2000);
}, 1000);
console.log("End")

//promises in javascript

