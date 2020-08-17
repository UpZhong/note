// 介绍
// 一个对象有状态变化
// 每次状体变化都会触发一个逻辑
// 不能总是用if...else来控制

// 状态（红灯、黄灯、绿灯）
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} light`)
        // 设置状态
        context.setState(this)
    }
}

// 主体
class Context {
    constructor() {
        this.state = null
    }
    // 获取状态
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}

// 测试   状态的切换和状态的获取分离
let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())
// 黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())


// 示例
// 有限状态机   javascript-state-machine