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