function map(array, callbackFn) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
      newArray.push(callbackFn(array[i]))
  }
  return newArray
};

function reduce(array, callbackFn, value) {
  let memo = (!!value) ? value : array[0]
  let i = (!!value) ? 0 : 1
  for (; i < array.length; i++) {
      memo = callbackFn(array[i], memo)
  }
  return memo
};