// 优秀博文 https://www.cnblogs.com/chengxiao/p/6103002.html
import {
    Util
} from './util.mjs';

/**
 * 插入排序：每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的数组中适当位置上，直到全部插入完为止。
 * @param arr 需要排序的数组
 * @param n 数组长度
 */
function insertSort(arr, n) {
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            } else {
                break
            }
        }
    }
}

/**
 * 插入排序优化: 不采用每次交换数组中的元素，而是直接对数组元素进行赋值
 * @param arr 
 * @param n 
 */
function insertSort2(arr, n) {
    for (let i = 1; i < n; i++) {
        let current = arr[i]
        let j;
        for (j = i; j > 0; j--) {
            if (current < arr[j - 1]) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
        }
        arr[j] = current
    }
}

let utils = new Util();
let n = 100;
let arr = utils.createArr(n, 1, 10);
let arr2 = arr.concat();
console.time("insertSort")
insertSort(arr, n)
console.timeEnd("insertSort")
console.time("insertSort2")
insertSort2(arr2, n)
console.timeEnd("insertSort2")

// node --experimental-modules insert.mjs