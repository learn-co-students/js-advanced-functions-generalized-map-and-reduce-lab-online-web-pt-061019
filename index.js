// Add your functions here
function map(arr, func) {
  let r = [];
  for (const el of arr){
    r.push(func(el));
  }
  return r;
}

function reduce(sourceArray, callback, startingPoint){
  let total = !!startingPoint ? startingPoint : sourceArray[0];
  let i = !!startingPoint ? 0 : 1 
  // console.log(i)
  for ( ; i < sourceArray.length; i++){
    // console.log("t1", total)
    total = callback(sourceArray[i], total)
    // console.log("t2", total)
  }
  return total
}