/* 介绍
旧接口格式和使用者不兼容
中间加一个适配转换接口 */

class Adaptee {
    specificRequest() {
        return "德国标准插头"
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info}--转换器--中国标准插头`
    }
}

// 测试
let target = new Target()
let req = target.request()
console.log(req)

// 示例：旧接口封装，vue的computed
/* // 自己封装的ajax,使用方式如下：
ajax({
    url: "/getData",
    type: "Post",
    data: {
        id: 123
    }
}).done(function () { })
// 但因为历史原因，代码中全都是：
$.ajax({ .....})

做一层适配器
var $ = {
    ajax: function (options) {
        return this.ajax(options)
    }
} */