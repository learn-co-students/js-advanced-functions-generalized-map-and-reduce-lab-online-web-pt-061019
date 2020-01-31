// Add your functions here

function map(sourceArr, fn) {
  let newArr = []

  for (const elem of sourceArr) {
    newArr.push(fn(elem))
  }
  return newArr
}

function reduce(sourceArr, callbackFn, initialVal){
  let start =  (!!initialVal) ? initialVal : sourceArr[0]
  let i = (!!initialVal) ? 0 : 1

  for (; i < sourceArr.length; i++){
    start = callbackFn(sourceArr[i], start)
  }

  return start
}