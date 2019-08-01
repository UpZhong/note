// 简单工厂模式又叫静态工厂模式，由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类对象。在简单工厂模式中，可以根据参数的不同返回不同类的实例。
// 简单工厂模式可以理解成，一个工厂只生产各种球的工厂，比如篮球，足球这些，客户购买的时候，只表明自己想要类型的球就可以，不必考虑球是怎么生产的。

// 简单工厂模式主要由三部分构成：工厂类(创建具体的产品对象)、抽象产品类、具体产品类，其中工厂类和抽象产品类可以合并

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