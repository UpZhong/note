/*
 * 工厂方法模式
 *
 * 定义：
 * 定义一个用于创建对象的接口，让子类决定实例化哪个类，Factory Method使一个类的实例化延迟到其子类。
 *
 * 本质：
 * 延迟到子类来选择实现
 *
 * 真正的工厂模式与简单工厂模式的区别在于，它不是另外使用一个类或对象来创建对象，而是使用一个子类。按照正式定义，工厂是一个将其成员对象的实例化推迟到子类中进行的类。
 *
 * 何时使用？
 * 1.动态实现：
 * 创建一些用不同方式实现同一接口的对象，那么可以使用一个工厂方法或简单工厂对象来简化选择实现的过程。这种选择可以是明确进行的也可以是隐含的。
 * 这是js中使用工厂模式的最常见的原因。
 * 2.节省设置开销：
 * 如果对象需要进行复杂并且批次相关的设置，那么使用工厂模式可以减少每种对象所需的代码量。如果这种设置只需要为特定类型的所有实例执行一次即可，这种作用尤其突出。
 * 把这种设置代码放到类的构造函数中并不是一种高效的做法，这是因为即使设置工作已经完成，每次创建新实例的时候这些代码还是会执行，而且这样做会把设置代码分散到不同的类中。
 * 工厂方法非常适合于这种场合。它可以在实例化所有需要的对象之前先一次性地进行设置。无论有多少不同的类都会被实例化，这种办法都可以让设置代码集中在一个地方。
 * 如果所用的类需要加载外部库的话，这尤其有用。工厂方法可以对这些库进行检查并动态加载那些未找到的库。这些设置代码只存在于一个地方，因此以后改起来也方便得多。
 * 3.用许多小型对象组成一个大对象:
 * 工厂方法可以用来创建封装了许多较小对象的对象。如果你不想让某个子系统与较大的那个对象形成强耦合，而是想在运行时从许多子系统中进行挑选的话，那么工厂方法是一个理想的选择。
 * 
 * 优点：
 * 工厂模式的主要好处在于消除对象间的耦合。通过使用工厂方法而不是new关键字及具体类。你可以把所有实例化代码集中在一个位置。
 * 这可以大大简化更换所用的类或在运行期间动态选择所用的类的工作。在派生子类时它也提供了更大的灵活性。
 * 使用工厂模式，你可以创建一个抽象的父类，然后在子类中创建工厂方法，从而把成员对象的实例化推迟到更专门化的子类中进行。
 * 所有这些好处都与面向对象涉及的这两条原则有关：弱化对象间的耦合;防止代码的重用。这些都有助于创建模块化的代码。
 * 
 * 缺点：
 * 如果根本不可能另外换用一个类，或者不需要在运行期间在一系列可互换的类中进行选择，那就不应该使用工厂方法。大多数类最好使用new关键字和构造函数公开地进行实例化。
 * 这可以让代码更简单易读。你可以一眼就看到调用的是什么构造函数，而不必去查看某个工厂方法以便知道实例化的是什么类。工厂方法在其使用场合非常有用，但切勿滥用。
 */

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
let admin = factory("admin");
let common = factory("common");
let test = factory("test");
console.log(admin,common,test)