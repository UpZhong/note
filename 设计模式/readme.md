单例模式：系统中被唯一使用且只能被实例化一次

工厂模式：工厂封装创建产品的具体逻辑供消费者调用

观察者模式：也叫发布订阅模式，多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新

外观模式：为子系统中的一组接口提供了一个高层接口，使用者使用这个高层接口

代理模式：使用者无权访问目标对象，中间加代理，通过代理做授权和控制

装饰器模式：为对象添加新功能，不改变其原有的结构和功能

适配器模式：旧接口格式和使用者不兼容，中间加一个适配转换接口

状态模式：一个对象有状态变化，每次状体变化都会触发一个逻辑，不能总是用if...else来控制

备忘录模式：随时记录一个对象的状态变化，随时可以恢复之前的某个状态

策略模式：不同策略分开处理，避免出现大量if..else 或者 switch...case

命令模式：执行命令时，发布者和执行者分开，中间加入命令对象，作为中转站

模板方法模式：把多个方法的调用封装在一个方法里供外部统一调用

职责链模式：一步操作可能分为多个职责角色来完成，把这些角色都分开，然后用一个链串起来，将发起者和各个处理者进行隔离

桥接模式：用于把抽象化与实现化解耦，使得二者可以独立变化

享元模式：共享内存，相同的数据，共享使用

原型模式：clone自己，生产一个新对象

组合模式：生成树形结构，表示"整体-部分"的关系，让整体和部分具有一致的操作方式，整体和各个节点的数据结构也保持一致