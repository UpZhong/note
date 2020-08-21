// 优秀博文 https://www.cnblogs.com/chengxiao/p/6103002.html
import { orginalArr, sortTime } from '../utils/utils'

/**
 * 冒泡排序：依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来
 * @param arr 数组
 * @param n 数组长度
 */
function bubble(arr, n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

/**
 * 冒泡排序优化：不使用数组交换而是直接赋值
 * @param arr 数组
 * @param n 数组长度
 */
function bubble2(arr, n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let value = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = value
            }
        }
    }

}

const n = 50000
let arr = orginalArr(n, 0, n)
sortTime(bubble, arr, n)

// node --experimental-modules 冒泡排序.mjs