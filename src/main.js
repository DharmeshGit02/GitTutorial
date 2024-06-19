function sum(arr) {
    return arr.reduce((accum, currVal) => currVal + accum, 0)
}

console.log(sum([10, 20, 30]))