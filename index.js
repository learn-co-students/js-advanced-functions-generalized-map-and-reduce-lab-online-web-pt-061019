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
// function reduceToTotal(sourceArray, startingPoint=0) {
//   for (const el of sourceArray) {
//     startingPoint += el;
//   };
//   return startingPoint;
// };
// describe("reduce returns false when any value is false", function() {
//   it("reduces correctly", function(){
//     sourceArray = [1, 2, true, "razmatazz", false]
//     expect(reduce(sourceArray, function(a, memo){ return !!a && memo})).to.be.false
//   })
// })

// reduce(arr, fn(a, memo) { return !!a && memo})
