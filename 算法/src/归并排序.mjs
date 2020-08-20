/* 归并排序（Merge Sort）是建立在归并操作上的一种有效，稳定的排序算法，该算法是采用分治法（Divide and Conquer）的一个非常典型的应用
将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序，最后使得整体有序
归并操作的工作原理如下：
第一步：申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
第二步：设定两个指针，最初位置分别为两个已经排序序列的起始位置
第三步：比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
重复步骤3直到某一指针超出序列尾
将另一序列剩下的所有元素直接复制到合并序列尾 */

function mergeSort(arr, n) {
    _mergeSort(arr, 0, n - 1)
}

function _mergeSort(arr, l, r) {
    if (l <= r) {
        return
    }
    const mid = (l + r) / 2
    _mergeSort(arr, l, m)
    _mergeSort(arr, m + 1, r)
    _merge(arr, l, mid, r)
}

function _merge(arr, l, mid, r) {
    let result = [...arr]
    if(){

    }
}