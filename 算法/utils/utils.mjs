/**
 * 生产在一定范围的n个正整数
 * @param {*} n 元素个数
 * @param {*} rangeL 左边界
 * @param {*} rangeR 右边界
 */
function orginalArr(n, rangeL, rangeR) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.trunc(Math.random() * (rangeR - rangeL + 1) + rangeL))
    }
    return arr
}

/**
 * 生成一个近乎有序的数组
 * @param n 数组长度
 * @param m 需要交换元素的个数
 */
function orginalArrNearlyOrder(n, m) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    for (let j = 0; j < m; j++) {
        var x = Math.trunc(Math.random() * n)
        var y = Math.trunc(Math.random() * n)
        let tmp = arr[x]
        arr[x] = arr[y]
        arr[y] = tmp
    }
    return arr
}

/**
 * 数组打印
 * @param {*} arr 
 */
function printArr(arr) {
    const len = arr.length
    let result = ""
    for (let i = 0; i < len; i++) {
        result += `${arr[i]} `
    }
    console.log(result)
}

/**
 * 数组深拷贝
 * @param {*} arr 
 */
function copyArr(arr) {
    const result = [], len = arr.length
    for (let i = 0; i < len; i++) {
        result.push(arr[i])
    }
    return result
}

/**
 * 测试数组是否被正确排序
 * @param arr 
 * @param n 
 */
function isSorted(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

/**
 * 执行排序函数并验证排序正确性及给出耗时
 * @param fn 
 * @param arr 
 * @param n 
 */
function sortTime(fn, arr, n) {
    console.time("排序时间")
    const result = fn(arr, n)
    console.timeEnd("排序时间")
    let flag;
    result ? flag = isSorted(result, n) : flag = isSorted(arr, n)
    const str = flag ? '已正确排序' : '排序错误'
    console.log(str)
}

export {
    orginalArr,
    printArr,
    copyArr,
    sortTime,
    orginalArrNearlyOrder
}