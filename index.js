// Add your functions here
function map(arr, fn){
  let newArr = []
  arr.forEach(el => { 
    newArr.push(fn(el))
  })
  return newArr;
}

function reduce(arr, fn, startingPoint){
  let updateStart = (!!startingPoint) ? startingPoint : arr[0];
  
  let i = (!!startingPoint) ? 0 : 1;
  
   for (; i < arr.length; i++){
    updateStart = fn(arr[i], updateStart)
  }
  return updateStart;
}