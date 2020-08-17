// 介绍
// 顺序访问一个集合,统一的遍历接口来遍历所有的数据类型
// 使用者无需知道集合的内部结构

class Iterater {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next() {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
        return null
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor(list) {
        this.list = list
    }
    // 生成遍历器
    getIterater() {
        return new Iterater(this.list)
    }
}

// 测试
const arr = [1, 2, 3, 4, 5]
const container = new Container(arr)
const iterater = new Iterater(container)
while (iterater.hasNext()) {
    console.log(iterater.next())
}


// 示例
// 如es6中的Iterator,可以遍历Arry Map Set String TypedArray Arguments NodeList
function each(data) {
    // 生成遍历器
    let iterator = data[Symbol.iterator]()

    let item = { done: false }
    while (!item.done) {
        item = iterator.next()
        if (!item.done) {
            console.log(item.value)
        }
    }


    // 以上代码可简化为
    // data有Symbo.iterator接口，则可以用for of 遍历
    // for (item of data) {
    //     console.log(item)
    // }
}

// 测试
const array = [1, 2, 3]
const nodeList = document.getElementsByTagName('p')
const m = new Map()
m.set('a', 200)
m.set('b', 100)

each(array)
each(nodeList)
each(m)

