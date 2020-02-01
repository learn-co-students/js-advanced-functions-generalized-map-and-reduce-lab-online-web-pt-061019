// Add your functions here
function map(arr, fn) {
    const newArray = [];
    for (const el of arr) {
      newArray.push(fn(el))
    }
    return newArray;
};
  
function reduce(arr, fn, startingPoint) {
    let newStart = !!startingPoint ? startingPoint : arr[0];
    let i = !!startingPoint ? 0 : 1;
    for ( ; i < arr.length; i++) {
  
      newStart = fn(arr[i], newStart)
  
    }
    return newStart;
};