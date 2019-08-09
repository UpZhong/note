/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 15:35:54
 * @LastEditTime: 2019-08-09 09:51:46
 * @LastEditors: Please set LastEditors
 */
/**
 * 简单工厂模式
 *
 * 定义：
 * 提供一个创建实例的功能，而无须关心其具体实现。被创建实例的类型可以是接口，抽象类或具体类。
 *
 * 本质：
 * 简单工厂方法的内部主要实现的功能是“选择合适的实现类”。本质是“选择实现”。
 *
 * 命名建议：
 * 类名称建议为“模块名称+Factory”。
 * 方法名称通常为“get+接口名称”或者是“create+接口名称”
 * 
 * 何时使用？
 * 1.工厂类负责创建的对象比较少
 * 2.客户端只知道传入工厂类的参数，对于如何创建对象并不关心
 * 
 * 优点：
 * 1.工厂类创建对象，客户端仅“消费”对象，实现了对象创建和使用的分离
 * 2.客户端只需知道具体产品类对应的参数即可，而不用知晓具体产品类的类名
 * 
 * 缺点：
 * 1.工厂类集中了所有产品的创建逻辑，职责过重，一旦不能正常工作，整个系统都会受影响
 * 2.简单工厂模式会增加系统中类的个数，增加系统的复杂度
 * 3.扩展困难，不利于扩展和维护
 * 
 */

// es5中要生成构造函数的静态方法，则可通过ShapeFactory.prototype.createDraw = function(){}  来实现

class ShapeFactory {
    static createDraw(param) {
        var shape;
        switch (param) {
            case 'line':
                shape = new drawLine();
                break
            case 'circle':
                shape = new drawCircle();
                break
            default:
                shape = new drawLine();
        }
        return shape;
    }
}

class drawLine {
    draw() {
        console.log('画线')
    }
}

class drawCircle {
    draw() {
        console.log('画圆')
    }
}

var test = ShapeFactory.createDraw('line');
test.draw()