// Add your functions here
function map(sourceArray, func){
  let newArray = []
  sourceArray.forEach(e => {
    newArray.push(func(e))
  })
  return newArray;
}

function reduce(arr, func, startingPoint){
  let t = (!!startingPoint) ? startingPoint : arr[0]
  let i = (!!startingPoint) ? 0 : 1

  for (; i < arr.length; i++){
    t = func(arr[i], t)
  }
  return t
}
