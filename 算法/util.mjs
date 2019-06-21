export class Util {
    constructor() {}
    /**
     * 随机生成一个长度为len的范围在start到end范围内的数组
     * @param {number} len 生成的数组长度
     * @param {number} start 
     * @param {number} end 
     */
    createArr(len, start, end) {
        var arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(Math.trunc(Math.random() * (end - start) + start))
        }
        return arr;
    }

    /**
     * 生成一个近乎有序的数组
     * @param n 数组长度
     * @param m 交互顺序的次数
     */
    createNearlyOrderArr(n, m) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i)
        }
        for (let j = 0; j < m; j++) {
            let randomX = Math.trunc(Math.random() * n);
            let randomY = Math.trunc(Math.random() * n);
            [arr[randomX], arr[randomY]] = [arr[randomY], arr[randomX]]
        }
        return arr
    }
}