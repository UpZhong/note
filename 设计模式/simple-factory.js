// 简单工厂模式又叫静态工厂模式，由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类对象。在简单工厂模式中，可以根据参数的不同返回不同类的实例。
// 简单工厂模式可以理解成，一个工厂只生产各种球的工厂，比如篮球，足球这些，客户购买的时候，只表明自己想要类型的球就可以，不必考虑球是怎么生产的。

// 简单工厂模式主要由三部分构成：工厂类(创建具体的产品对象)、抽象产品类、具体产品类，其中工厂类和抽象产品类可以合并

// 简单工厂的优点，在于只需要一个正确的参数，就可以获取所需要的对象，而无需知道其创建的具体细节。
// 但是在函数内，包含了所有对象的创建逻辑，和判断逻辑的代码，每增加新的构造函数还需要修改判断逻辑代码，当我们对象过多的情况下，就难以维护了。
// 所以简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂使用。


class Shape {
    static draw(param) {
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

var test = Shape.draw('line');
test.draw()