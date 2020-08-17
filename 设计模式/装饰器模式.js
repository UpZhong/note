/* 介绍：
为对象添加新功能
不改变其原有的结构和功能 */

class Circle {
    draw() {
        console.log("画一个图形")
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBoder(circle)
    }
    setRedBoder(circle) {
        console.log("设置红色边框")
    }
}

//  测试
let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
dec.draw()

// 示例：ES7装饰器，core-decorators