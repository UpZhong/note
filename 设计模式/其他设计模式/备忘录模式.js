// 概览
// 随时记录一个对象的状态变化
// 随时可以恢复之前的某个状态（如撤销功能）

// 示例

// 状态备忘
class Memento {
    constructor(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}

// 备忘录列表
class CareTaker {
    constructor() {
        this.list = []
    }
    add(memento) {
        this.list.push(memento)
    }
    get(index) {
        return this.list[index]
    }
}

// 编辑器
class Editor{
    constructor(){
        this.content = null
    }
    setContent(content){
        this.content = content
    }
    getContent(){
        return this.content
    }
    saveContentToMemento(){
        return new Memento(this.content)
    }
    getContentFromMemento(memento){
        this.content = memento.getContent()
    }
}


let editor = new Editor()
let careTaker = new CareTaker()
editor.setContent("1111")
editor.setContent("2222")
careTaker.add(editor.saveContentToMemento())  // 存储备忘录
editor.setContent("3333")
careTaker.add(editor.saveContentToMemento())  // 存储备忘录
editor.setContent("4444")

console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get(1))  // 撤销
console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get(0))  // 撤销
console.log(editor.getContent())