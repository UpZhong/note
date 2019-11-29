# canvas 知识总结

1. 使用 es6 的 class 定义一个物体类，并在 constructor 中定义默认值，并在每个方法中都返回该对象(this)，就可以直接调用类中的`属性`和方法。

2. context.translate() 方法重新映射画布上的 (0,0) 位置

3. ele.getBoundingClientRect() 返回一组矩形的集合, 即：是与该元素相关的 CSS 边框集合包含 bottom、height、left、right、top、width、x、y

4. result = window.requestAnimationFrame(fn) 执行动画  
   window.cancelAnimationFrame(result) 停止动画

5. atan2(y,x) 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间

6. angle %= Math.PI * 2 意思是angle取值为0~2PI