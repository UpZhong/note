/**
 * 获取数据并和页面进行绑定,这里的/ajax/index是app.js里面定义的
 */
$.get('/ajax/index', function (res) {
    console.log(res);
    new Vue({
        el: "#root",
        data: {
            content: res.data
        },
        methods: {
            clickHandle: function () {
                console.log('我被点击了')
            }
        }
    })
}, 'json')