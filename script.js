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

// // this is the merge sort part
let unsorted = [3, 2, 1, 13, 8, 5, 0, 1]
let notsorted = [105,79,100,110]

function mergesort(arr) {
    if (!arr || arr.length <= 1) {return arr }
    else{
        let mid = Math.floor(arr.length / 2)
        let left = mergesort( arr.slice(0,mid))
        let right = mergesort(arr.slice(mid))
        return merge(left,right)
        function merge(left,right) {
           let sorted = []
           let leftindex = 0
           let rightindex= 0
           while (leftindex < left.length && rightindex < right.length) {
            if (left[leftindex] < right[rightindex]) {
                sorted.push(left[leftindex])
                leftindex++
            }
            else {
                sorted.push(right[rightindex])
                rightindex++
            }
           }
           sorted = sorted.concat(left.slice(leftindex)).concat(right.slice(rightindex));
           console.log(sorted);
    return sorted;
        }

    }
    ;
}

mergesort(unsorted)
















