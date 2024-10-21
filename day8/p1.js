const myPromise=new Promise((resolve,reject)=>{
  let success=true;
  if(success){
    resolve("Data sent successfully");
  }else{
    reject("Data Not sent");
  }
});

myPromise.then((message)=>{
console.log("Data:" +message);
}).catch((error)=>{
  console.log("Error")
});