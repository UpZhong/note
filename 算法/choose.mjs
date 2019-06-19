// 优秀博文 https://www.cnblogs.com/chengxiao/p/6103002.html
import {
  Util
} from './util.mjs';

/**
 * 选择排序：每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 以此类推，直到全部待排序的数据元素排完
 * @param {array} arr 需要排序的数组
 * @param {number} n 数组长度
 */
function chooseSort(arr, n) {
  for (let i = 0; i < n; i++) {
    // 找到数组中最小的元素索引
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

let utils = new Util();
let n = 10;
let arr = utils.createArr(n, 1, 10);
console.log(arr)
chooseSort(arr, n)
console.log(arr)

// node --experimental-modules choose.mjs