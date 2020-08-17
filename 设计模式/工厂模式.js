/* 介绍
将new操作单独封装
遇到new时，就要考虑是否使用该模式 */

// 示例： 你去购买汉堡，直接点餐、取餐，不会自己亲手做
// 商店要"封装"做汉堡的工作，做好直接卖给消费者

class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log("init...")
    }

    fn1() {
        console.log("fun1...")
    }

    fn2() {
        console.log("fun2...")
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

// 测试
let creator = new Creator()
let p = creator.create('p')
p.init()
p.fn1()