function binary_search(arr, x, start, end) {
    start = start || 0;
    end = end || arr.length - 1;

    // Base Condtion
    if (start > end) return `${x} cannot be found!`;

    // Find the middle index
    var mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return `INDEX of ${x} is: ${mid}`;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x) return binary_search(arr, x, start, mid - 1);
    // If element at mid is smaller than x,
    // search in the right half of mid
    else return binary_search(arr, x, mid + 1, end);
}

//numerical search
var arr = [1, 3, 7, 11, 19, 23, 29, 37, 43, 56, 61, 67, 71, 79, 83, 97]
console.log(binary_search(arr, 67))
console.log(binary_search(arr, 85, 0, arr.length - 1))

//character search
arr = ['a', 'e', 'b', 'd', 'g', 'z'];
console.log(binary_search(arr, 'b'));
console.log(binary_search(arr, 'f'));

//running time
let start = Date.now();
x = 67
binary_search([1, 3, 7, 11, 19, 23, 29, 37, 43, 56, 61, 67, 71, 79, 83, 97], x)
let end = Date.now()
console.log(`Time taken for binary searching ${x}: ${end - start} ms.`)

//random data running time
start = Date.now();
data = [...Array(1000000).keys()];
binary_search(data, 10000)
end = Date.now()
console.log(`Time taken for binary searching: ${end - start} ms.`)