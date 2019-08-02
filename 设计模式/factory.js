// 工厂方法模式中，工厂父类负责定义创建产品对象的公共接口，而工厂子类则负责生成具体的产品对象，
// 这样做的目的是将产品类的实例化操作延迟到工厂子类中完成，即通过工厂子类来确定究竟应该实例化哪一个具体产品类。

// 工厂模式由4部分组成：抽象工厂、具体工厂、抽象产品、具体产品

/* object instanceof constructor  
object 要检测的对象
constructor 某个构造函数
instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。 */

let factory = function (role) {
    if (this instanceof factory) {
        var s = new this[role]();
        return s;
    } else {
        return new factory(role);
    }
}

factory.prototype.admin = function () {
    this.name = "平台用户";
    this.role = ["登录页", "主页"]

}

factory.prototype.common = function () {
    this.name = "游客";
    this.role = ["登录页"]


}
factory.prototype.test = function () {
    this.name = "测试";
    this.role = ["登录页", "主页", "测试页"];
    this.test = "我还有一个测试属性哦"
}
let admin = new factory("admin");
let common = new factory("common");
let test = new factory("test");
console.log(admin,common,test)