// 概念
// 执行命令时，发布者和执行者分开
// 中间加入命令对象，作为中转站

// 发送者（发出命令，调用命令对象）--命令对象（接口命令，调用接受者对应接口--接受者）


class Receiver {
    exec() {
        console.log('执行')
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver
    }
    cmd() {
        console.log('触发命令')
        this.receiver.exec()
    }
}

class Invoker {
    constructor(command) {
        this.command = command
    }
    invoke() {
        console.log('开始')
        this.command.cmd()
    }
}

// 士兵
let soldier = new Receiver()
// 小号手
let trumpeter = new Command(soldier)
// 将军
let general = new Invoker(trumpeter)
general.invoke()