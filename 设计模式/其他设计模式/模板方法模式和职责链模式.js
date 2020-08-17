// 模板方法模式
// 概念
// 把多个方法的调用封装在一个方法里供外部统一调用

// 示例
class Action {
    handle() {
        this.handle1()
        this.handle2()
        this.handle3()
    }

    handle1() {
        console.log('1')
    }
    handle2() {
        console.log('2')
    }
    handle3() {
        console.log('3')
    }
}

// 职责链模式
// 概念
// 一步操作可能分为多个职责角色来完成
// 把这些角色都分开，然后用一个链串起来
// 将发起者和各个处理者进行隔离

// 示例，请假审批，需要组长审批、经理审批、最后总监审批
class Action {
    constructor(name) {
        this.name = name
        this.nextAction = null
    }
    setNextAction(action) {
        this.nextAction = action
    }
    handle() {
        console.log(`${this.name} 审批`)
        if (this.nextAction !== null) {
            this.nextAction.handle()
        }
    }
}

let a1 = new Action('组长')
let a2 = new Action('经理')
let a3 = new Action('总监')

a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()