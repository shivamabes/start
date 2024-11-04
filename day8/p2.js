async function orderfood(name,time){
  return new Promise((resolve,reject)=>
  {
    if(name=="burger") reject("Burger not available")
    setTimeout(()=>{
      resolve("order for "+name+" prepared");
    },time)
  });
}
async function restaurent(){
  console.log("order placed");
  let pizza=await orderfood("pizza",1000);
  console.log(pizza);
  try {
    let burger=await orderfood("burger",2000);
    
    console.log(burger);
  } catch (error) {
    console.log(error);
  }
  let noodles=await orderfood("noodles",5000);
  console.log(noodles);
  console.log("All orders completed");
}
console.log(55);
restaurent()