// 概念
// clone自己，生成一个新对象

// js中的应用：Object.create-基于原型，创建一个新的对象

let prototype = {
    getName: function () {
        return this.first + " " + this.last
    },
    say: function () {
        console.log('hello')
    }
}

let x = Object.create(prototype)
x.first = "a"
x.last = 'b'
console.log(x.getName())