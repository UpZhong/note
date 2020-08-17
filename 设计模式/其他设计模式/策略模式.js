// 概念
// 不同策略分开处理
// 避免出现大量if..else 或者 switch...case

// 示例，将一个class中的判断 分开为 多个 单独的class
class User {
    constructor(type) {
        this.type = type
    }
    buy() {
        if (this.type === 'common') {
            console.log("普通用户购买")
        } else if (this.type === 'menber') {
            console.log('会员购买')
        } else if (this.type === 'vip') {
            console.log('vip购买')
        }
    }
}


// 修改为如下多个class

class Common {
    buy() {
        console.log("普通用户购买")
    }
}
class Menber {
    buy() {
        console.log("会员购买")
    }
}
class Vip {
    buy() {
        console.log("vip购买")
    }
}