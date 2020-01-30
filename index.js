function map(sourceArray, callFunction) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
      let element = sourceArray[i]
      newArray.push(callFunction(element))
    }
    return newArray;
  }

function reduce(sourceArray, cbFunction, startingValue){
        let start =  !!startingValue ? startingValue : sourceArray[0]
        for (let i = 0; i < sourceArray.length; i++){
           let result = cbFunction(sourceArray[i], start)
        }
       return result
}