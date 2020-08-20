// 将待排序的元素插入到前面已排序元素的合适位置

// 特点：可提前终止内层循环，对一个近乎有序的数组的排序效率很高

import { orginalArr, orginalArrNearlyOrder, printArr, sortTime } from '../utils/utils.mjs'

function insertSort(arr, n) {
    for (let i = 1; i < n; i++) {
        // 寻找元素arr[i]合适的插入位置
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break
            }
        }
    }
}

// 插入排序优化，将数组位置交换变为对数组赋值，提高效率
function insertSort_u(arr, n) {
    for (let i = 1; i < n; i++) {
        // 寻找元素arr[i]合适的插入位置
        const e = arr[i]
        let j;
        for (j = i; j > 0; j--) {
            if (e < arr[j - 1]) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
        }
        arr[j] = e
    }
}

// 测试
const n = 100
// const arr = orginalArr(n, 5, n)
const arr = orginalArrNearlyOrder(n, 5)
// printArr(arr)
sortTime(insertSort_u, arr, n)
// printArr(arr)

// node --experimental-modules 插入排序.mjs