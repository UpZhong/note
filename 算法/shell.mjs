// 优秀博文  https://www.cnblogs.com/chengxiao/p/6104371.html
import {
    Util
} from './util.mjs';

/**
 * 希尔排序：把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 * 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。
 * @param arr 数组
 * @param n 数组长度
 */
function shellSort(arr, n) {
    for (let i = Math.trunc(n / 2); i > 0; i = Math.trunc(i / 2)) {
        for (let j = i; j < n; j++) {
            for (let k = j - i; k >= 0; k = k - i) {
                if (arr[k] > arr[k + i]) {
                    let tmp = arr[k];
                    arr[k] = arr[k + i];
                    arr[k + i] = tmp
                } else {
                    break
                }
            }
        }
    }
}
let util = new Util();
let n = 20;
let arr = util.createNearlyOrderArr(n,4)
console.log(arr)
shellSort(arr, n);
console.log(arr)

// node --experimental-modules shell.mjs