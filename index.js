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
        let i = !!startingValue ? 0 : 1
        for ( ; i < sourceArray.length; i++){
           start = cbFunction(sourceArray[i], start)
           console.log(start)
        }
       return start
}