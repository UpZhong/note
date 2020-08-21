// 快速排序思想：先选定一个元素，把比这个小的放在当前元素的左边，比这个大的放在当前元素的右边，
// 然后分别对左右两边的元素进同样的操作，直至排序完成

import { orginalArr, sortTime } from '../utils/utils'

function quickSort(arr, n) {
    if (n <= 1) { return arr; }
    const mIndex = Math.trunc(n / 2)
    const mEl = arr[mIndex]
    let left = [], right = []
    for (let i = 0; i < n; i++) {
        if (i != mIndex) {
            if (arr[i] > mEl) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
    }
    return quickSort(left, left.length).concat(mEl).concat(quickSort(right, right.length))
}

const n = 50000
let arr = orginalArr(n, 0, n)
sortTime(quickSort, arr, n)

// node --experimental-modules 快速排序.mjs