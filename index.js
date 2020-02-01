// Add your functions here
const map = function(arr, fn){
    let newArr = []
    for(const el of arr) {
        newArr.push(fn(el))
    }
    return newArr
}

// const reduce = function(arr, fn, startingPoint) {
//     if (!startingPoint) {
//         startingPoint = arr[0]
//         arr = arr.splice(1)
//     }
//     // let newStart = startingPoint
//     for(const el of arr) {
//        startingPoint = fn(el, startingPoint)
//     }
//     return startingPoint
// }


const reduce = function(arr, fn, startingPoint) {
    let newStartPt = !!startingPoint ? startingPoint : arr[0]
    let index = !!startingPoint ? 0 : 1
    for ( ; index < arr.length; index++ ) {
        newStartPt = fn(arr[index], newStartPt)
    }
    return newStartPt
}