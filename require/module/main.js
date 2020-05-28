require.config({
    "waitSeconds": 0,
    "baseUrl": "./module",
    "paths": {
        "util": 'util',
        "eventH": 'event-handle'
    },
    "shim": {}  // 加载非AMD定义的模块
})

require(['eventH'], function (eventH) {
    setTimeout(function () {
        eventH.addEventListener()
    }, 500)
})