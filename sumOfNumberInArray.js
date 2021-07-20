/*
* How define two number which together get to specified sum
* input: array of number, sum number
* output: array of indexes
*/

const data = [1, 2, 3, 4, 23, 3, 55, 1, 1]

// SUM of 2

// Time complexity: O(n^2)
// Memory complexity: O(1)
const sumOfTwo1 = (arr, target) => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
               return result.push([i, j])
            }
        }
    }

    return []
}

// Time complexity: O(n)
// Memory complexity: O(n)
const sumOfTwo2 = (arr, target) => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i]

        if(obj[diff] && obj[diff] !== i){
            return [i, obj[diff]]
        }
    }

    return []
}