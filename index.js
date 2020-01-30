function map(sourceArray, callFunction) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
      let element = sourceArray[i]
      newArray.push(callFunction(element))
    }
    return newArray;
  }

function reduce(sourceArray, cbFunction, startingValue){
    
}