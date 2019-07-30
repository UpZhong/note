/* 对象都有__proto__属性
函数都有prototype属性，prototype指向原型对象
原型对象中有一个constructor构造器，默认指向构造函数 */

// 使用call实现继承的原理分析：https://www.520mwx.com/view/63063
// 简述一下就是：call只是起了个替换this对象的作用，主要工作还是在new 关键字，它能自动检测和this绑定的属性和方法，全部添加到要实例化的对象上面

/**  1.构造函数实现继承，缺点是只实现了部分继承，无法继承父类原型（prototype）对象的方法 */
function Parent1() {
    this.age = "parent1";
    this.arr = [1,2,3];
}

function Child1() {
    Parent1.call(this); //使用call继承
    this.type = "child1"
}

Parent1.prototype.age = function () {}
var a = new Child1();
console.log(a)

/**   2.原型链继承，缺点是改变第一个对象的属性，第二个对象的属性也跟着改变了 */

function Parent2() {
    this.name = "parent2";
    this.arr = [1,2,3];
}

function Child2() {
    this.type = "child2"
}

Child2.prototype = new Parent2(); //原型链继承
// 继承的属性和方法挂载原型对象(__proto__)上，如果修改原型对象上的属性和方法，则其他实例中的属性和方法也跟着改变
var a = new Child2();
var b = new Child2();
a.arr.push(4)
console.log(a.arr, b.arr)

/**   3.组合继承  结合了构造函数方式和原型链继承方式的优点，避免了缺点 */
function Parent3(){
    this.name ="parent3";
    this.arr = [1,2,3];
}

function Child3(){
    Parent3.call(this)
    this.type = "child3"
}
Parent3.prototype.age  = function(){}

Child3.prototype = new Parent3()
var a = new Child3();
var b = new Child3();
a.arr.push(4)
console.log(a,b)

/**   4.组合继承优化1  不用两次调用new Parent4()，缺点是构造函数指向的是一个(Parent4)，无法区分实例是由父类创建还是由子类创建的 */
function Parent4(){
    this.name = "parent4";
    this.arr = [1,2,3];
}

function Child4(){
    Parent4.call(this);
    this.type = "child4"
}

Child4.prototype = Parent4.prototype;
var a = new Child4();
var b = new Child4();
console.log(a instanceof Child4 , a instanceof Parent4)  //true true
console.log(a.constructor,b.constructor)  //Parent4

/**   5.组合继承优化2 */
function Parent5(){
    this.name = "parent5";
    this.arr = [1,2,3];
}

function Child5(){
    Parent5.call(this);
    this.type = "child5";
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
var a=new Child5();
console.log(a instanceof Parent5,a instanceof Child5);  //true true
console.log(a.constructor);  //Child5