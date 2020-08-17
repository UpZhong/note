/* 介绍
发布&订阅
一对n */

/* 示例
点咖啡，点完之后坐等被叫 */

class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach(item => {
            item.update()
        })
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update,state:${this.subject.getState()}`)
    }
}

// 测试
let s = new Subject()
let o1 = new Observer('o2', s)
let o2 = new Observer('o3', s)
let o3 = new Observer('o3', s)
let o4 = new Observer('o4', s)

s.setState(1)
s.setState(2)
s.setState(3)