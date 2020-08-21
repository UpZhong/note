/* 归并排序（Merge Sort）是建立在归并操作上的一种有效，稳定的排序算法，该算法是采用分治法（Divide and Conquer）的一个非常典型的应用
将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序，最后使得整体有序
归并操作的工作原理如下：
第一步：申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
第二步：设定两个指针，最初位置分别为两个已经排序序列的起始位置
第三步：比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
重复步骤3直到某一指针超出序列尾
将另一序列剩下的所有元素直接复制到合并序列尾 */

import { orginalArr, sortTime } from '../utils/utils'
import { insertSort } from './插入排序'

/**
 *  归并排序,从上往下排 
 * @param arr 
 * @param n 元素个数
 */
function mergeSort(arr, n) {
    _mergeSort(arr, 0, n - 1)
}

/**
 * 
 * @param arr 
 * @param l 数组的起始位置
 * @param r 数组的结束位置
 */
// 递归使用归并排序,对arr[l...r]的范围进行排序
function _mergeSort(arr, l, r) {
    if (l >= r) {
        return
    }
    const mid = l + parseInt((r - l) / 2)
    _mergeSort(arr, l, mid)
    _mergeSort(arr, mid + 1, r)
    _merge(arr, l, mid, r)

    // 优化
    // 对于arr[mid] <= arr[mid+1]的情况,不进行merge
    // 对于近乎有序的数组非常有效,但是对于一般情况,有一定的性能损失
    // if(arr[mid] > arr[mid+1]){
    //     _merge(arr, l, mid, r)
    // }
}

/**
 * 合并数组
 * @param arr 
 * @param l 数组的起始位置
 * @param mid 数组的中间位置
 * @param r 数组的结束位置
 */
function _merge(arr, l, mid, r) {
    // 把当前需要合并的数组拷贝一份 arrtmp
    let arrTmp = new Array(r - l + 1)
    for (let i = l; i <= r; i++) {
        arrTmp[i - l] = arr[i]
    }
    // i:左侧数组的下标  j:右侧数组的下标 k:拷贝出来的数组的下标
    let i = l, j = mid + 1
    for (let k = l; k <= r; k++) {
        if (i > mid) { //如果左侧数组已用完，则只需要把右侧待排序的数组依次赋值给原数组就行
            arr[k] = arrTmp[j - l]
            j++
        } else if (j > r) { //右侧用完，把左侧的依次赋值给原数组
            arr[k] = arrTmp[i - l]
            i++
        } else if (arrTmp[i - l] < arrTmp[j - l]) { //比较左侧指针所指元素和右侧指针所指元素的大小，谁小就把谁赋值给原数组，同时移动指针
            arr[k] = arrTmp[i - l]
            i++
        } else {
            arr[k] = arrTmp[j - l]
            j++
        }
    }
}

// ----------------------------------------------------------------------------

/**
 * 归并排序，从下往上排
 * @param arr 
 * @param n 
 */
function mergeBU(arr, n) {
    for (let sz = 1; sz <= n; sz += sz) {
        for (let i = 0; i < n; i += sz + sz) {
            // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并
            _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
        }
    }

    // 优化，对一个近乎有序的数组，使用插入排序提高排序效率
    // for (let i = 0; i < n; i += 16) {
    //     insertSort(arr, i, min(i + 15, n - 1));
    // }
    // for (let sz = 16; sz <= n; sz += sz) {
    //     for (let i = 0; i < n - sz; i += sz + sz) {
    //         if (arr[i + sz - 1] > arr[i + sz]) {
    //             _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
    //         }
    //     }
    // }

}

// ------------------------------------------------------------------------------

const n = 50000
let arr = orginalArr(n, 0, n)
sortTime(mergeSort, arr, n)
// sortTime(mergeBU, arr, n)

// node --experimental-modules 归并排序.mjs