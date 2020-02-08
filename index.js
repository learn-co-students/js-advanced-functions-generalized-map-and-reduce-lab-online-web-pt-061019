// Add your functions here
function map(array, callbackFn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFn(array[i]))
    }
    return newArray
}

function reduce(array, callbackFn, value) {
    let memo = (!!value) ? value : array[0]
    let i = (!!value) ? 0 : 1
    for (; i < array.length; i++) {
        memo = callbackFn(array[i], memo)
    }
    return memo
}
    // if (value) {
    //     for (let i = value; i < array.length; i++) {
    //         let newValue = callbackFn(array[i])
    //         return newValue
    //     }
    // } else {
    //     for (let i = 0; i < array.length; i++) {
    //         newValue = callbackFn(array[i])
    //         return newValue
    //     }
    // }


    // let newValue = {}
    // for (let i = value; i < array.length; i++) {
    //     newValue = callbackFn(array[i])
    // }
    // return newValue