/* 介绍
为子系统中的一组接口提供了一个高层接口
使用者使用这个高层接口 */

// 场景,可使用不同的传参方式调用接口
function bindEvent(el, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    // ...
}

// 调用
bindEvent(elem, 'click', '.p', fn)
bindEvent(elem, 'click', fn)