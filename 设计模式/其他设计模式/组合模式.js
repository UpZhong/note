// 概念
// 生成树形接口，表示“整体-部分”关系
// 让整体和部分都具有一致的操作方式
// 整体和各个节点的数据结构也保持一致


// 示例
var a = {
    tag: "div",
    attr: {
        id: "div1",
        className: "container"
    },
    children: [
        {
            tag: 'p',
            attr: {},
            children: ['123']
        },
        {
            tag: 'p',
            attr: {},
            children: ['456']
        }
    ]
}