// this is for the for loop part
let array = []
console.log(array);

function fibo(num) {
 let a = 0
 let b = 1
 if (num === a) {return a}
 if (num === b) {return b}

 array.push(a,b)
 console.log(a);
 console.log(b);

 for (let i = 2; i <= num; i++) {
    const element = a + b
    console.log(element);
    array.push(element)
    a = b
    b = element
 }}

fibo(3)

// this is for the recursive part
function fiborecursion(num) {
    if (num === 1) {
        return num;
        }
    if (num === 0) {
        return num;
        }
        else{

            let result =   (fiborecursion(num - 1) + fiborecursion(num - 2))
            return result

        }


}
console.log(fiborecursion(4));

// this is the merge sort part
let unsorted = [3, 2, 1, 13, 8, 5, 0, 1]
let notsorted = [105,79,100,110]

console.log(unsorted);

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    else {
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        for (let i = 0; i < left.length; i++) {

            for (let j = i + 1; j < left.length; j++) {

                if (left[j] < left[i]) {
                    let temp = left[i];
                    left[i] = left[j];
                    left[j] = temp;
                }
            }
        }
        for (let i = 0; i < right.length; i++) {
            for (let j = i + 1; j < right.length; j++) {
                if (right[j] < right[i]) {
                    let temp = right[i];
                    right[i] = right[j];
                    right[j] = temp;

                }
            }
        }
        arr.splice(0, mid, ...left);
        arr.splice(mid, right.length, ...right);

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}

mergeSort(notsorted)
console.log(notsorted);

