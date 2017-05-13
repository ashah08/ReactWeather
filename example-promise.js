var addPromise = function(a,b){
  return new Promise(function(resolve,reject){
     if (typeof a === "number" && typeof b === "number"){
       resolve(a + b);
     }else{
       reject("Both needs to be number");
     }
  });
}

addPromise(2,3).then(function(sum){
  console.log("success", sum);
},function(err){
  console.log("error", err);
})

addPromise("Arpit",3).then(function(sum){
  console.log("success", sum);
},function(err){
  console.log("error", err);
})
