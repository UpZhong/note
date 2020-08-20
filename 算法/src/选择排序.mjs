// 依次选择后面元素的最大或最小的元素放在已排序的元素的最后一位

import { orginalArr, printArr, sortTime } from '../utils/utils.mjs'

function chooseSort(arr, n) {
    for (let i = 0; i < n; i++) {
        // 寻找[i,n]区间里面的最小值
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
}

// 测试
const n = 100
const arr = orginalArr(n, 5, n)
printArr(arr)
sortTime(chooseSort,arr,n)
printArr(arr)

// node --experimental-modules 选择排序.mjs