// 优秀博文  https://www.cnblogs.com/chengxiao/p/6104371.html
import {
    Util
} from './util.mjs';

function shellSort(arr, n) {
    for (let i = Math.trunc(n / 2); i > 0; i = Math.trunc(i / 2)) {
        for (let j = i; j < n; j++) {
            for (let k = j - i; k >= 0; k = k - i) {
                if (arr[k] > arr[i + k]) {
                    let value = arr[k];
                    arr[k] = arr[i + k];
                    arr[i + k] = value
                } else {
                    break
                }
            }
        }
    }
}

let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
let n = arr.length;
shellSort(arr, n);
console.log(arr)

// node --experimental-modules shell.mjs