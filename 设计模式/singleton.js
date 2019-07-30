// 单例模式：确保某个类只有一个实例，且自行实例化并向整个体统提供这个实例
// 1.传统单例
var Singleton1 = function(name) {
    this.name = name;
    this.instance = null;
};
Singleton1.prototype.getName = function() {
    alert(this.name);
};
Singleton1.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton1(name);
    }

    return this.instance;
};
var a = Singleton1.getInstance('seven1');
var b = Singleton1.getInstance('seven2');
console.log(a,b,a===b);

// 2.惰性单例,利用闭包的特性创建单例,同时符合惰性单例的特性
var Singleton2 = function(name) {
    this.name = name;
};
Singleton2.prototype.getName = function() {
    alert(this.name);
};
Singleton2.getInstance = (function() {
    var instance;
    return function(name){
        if (!instance) {
            instance = new Singleton2(name);
        }
        return instance
    }
})();

var a = Singleton2.getInstance('seven1');
var b = Singleton2.getInstance('seven2');
console.log(a,b,a===b);

// 3. es6单例模式
class Singleton3{
    constructor(name){
        this.name = name;
        this.instance = null;
    }
    static getInstance(name){
        if(!this.instance){
            this.instance = new Singleton3(name)
        }
        return this.instance
    }
}

var a = Singleton3.getInstance("seven1");
var b = Singleton3.getInstance("seven2");
console.log(a,b,a===b);