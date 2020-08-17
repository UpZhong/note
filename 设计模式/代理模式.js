/* 介绍
使用者无权访问目标对象
中间加代理，通过代理做授权和控制 */

class ReadImg{
    constructor(fileName){
        this.fileName = fileName
        this.loadFromDisk()  //初始化直接从硬盘中加载
    }
    loadFromDisk(){
        console.log('loading...' + this.fileName)
    }
    display(){
        console.log('display...' + this.fileName)
    }
}

class ProxyImg{
    constructor(fileName){
        this.realImg = new ReadImg(fileName)
    }
    display(){
        this.realImg.display()
    }
}

// 测试
let proxyImg = new ProxyImg("1.jpg")
proxyImg.display()

// 场景  网页事件代理   jQuery $.proxy   ES6 Proxy