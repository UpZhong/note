// 概念
// 用于把抽象化与实现化解耦
// 使得二者可以独立变化


//实例，如需要画不同颜色的三角形和不同颜色的圆时，可以把颜色分开定义，画图时把颜色和形状组合
class Color {
    constructor(name) {
        this.name = name
    }
}

class Shape {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    draw() {
        console.log(`${this.color.name} ${this.name}`)
    }
}

// 测试
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Shape('circle', red)
circle.draw()
let triangle = new Shape('triangle', red)
triangle.draw()