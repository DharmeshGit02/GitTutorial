function sum(arr) {
    return arr.reduce((accum, currVal) => currVal + accum, 0)
}

function binSearch(arr, key) {
    const sortedArr = arr.sort((a, b) => a - b)
    let low = 0, high = sortedArr.length - 1
    while(low <= high) {
        let mid = Math.trunc(low + (high - low) / 2)
        if(sortedArr[mid] == key) return `${key} found at index ${mid}`
        else if(sortedArr[mid] < key) high = mid - 1
        else low = mid + 1
    }
    return `${key} doesn't exists!`
}

const arr = [2, 3, 1, 7, 8, 9, 10, 5, 6, 4]

console.log(sum(arr))
console.log(binSearch(arr, 5))