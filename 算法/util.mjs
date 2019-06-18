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
}