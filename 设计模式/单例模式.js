/* 介绍
系统中被唯一使用
只能被实例化一次 */

class SingleObject {
    login() {
        console.log("login.....")
    }
}

SingleObject.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

//测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2)

// 说明：自执行闭包函数的作用：可以用它创建命名空间，避免变量的全局污染，同时通过闭包又可以访问该函数

// 示例：系统登录框，购物车，vuex的store，服务等