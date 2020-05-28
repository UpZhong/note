# require.js 的加载

```html
<script src="lib/require.js" data-main="module/main"></script>
```

-   data-main 属性的作用是，指定网页程序的主模块。
-   在上例中，就是 module 目录下面的 main.js，这个文件会第一个被 require.js 加载。
-   由于 require.js 默认的文件后缀名是 js，所以可以把 main.js 简写成 main。

# 主模块的写法

两种方式，一种是通过 require 直接加载，另外一种是先配置再加载。

## 直接加载

```js
// main.js
require(["./module/event-handle"], function (eventH) {
    setTimeout(function () {
        eventH.addEventListener();
    }, 500);
});
```

直接加载就是把文件的路径写全，通过 require 引用。

## 先配置再加载

```js
// main.js
require.config({
    waitSeconds: 0,
    baseUrl: "./module",
    paths: {
        // 加载AMD定义的模块
        util: "util",
        eventH: "event-handle",
    },
    shim: {
        angular: {
            // 定义模块的特征
            deps: ["jquery"], // 依赖项，可选
            exports: "angular", // 导出项，可选
        },
    }, // 加载非AMD定义的模块
});

require(["eventH"], function (eventH) {
    setTimeout(function () {
        eventH.addEventListener();
    }, 500);
});
```

先配置再加载就是通过`require.config`先定义好模块的别名，然后通过下面的`require`使用

# AMD 模块的写法

1. require.js 加载的模块，采用 AMD 规范。也就是说，模块必须按照 AMD 的规定来写。
2. 具体来说，就是模块必须采用特定的 define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在 define()函数之中。

```js
// util.js
define(function () {
    function log() {
        console.log("element click");
    }

    function getElementById(id) {
        return document.getElementById(id);
    }

    return {
        log: log,
        getElementById: getElementById,
    };
});
```

```js
// event-handle.js
define(["util", "./change-text"], function (util, changeText) {
    var ele = util.getElementById("btn");
    addEventListener = function () {
        ele.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                util.log();
                changeText.writeTxt();
            },
            false
        );
    };
    return {
        addEventListener: addEventListener,
    };
});
```
* 模块如果不存在依赖项，直接写function即可，如util.js
* 模块存在依赖项，则写在function前的数组里，如event-handle.js
* 模块依赖项的定义可以直接拿main.js的config中定义好的依赖也可以直接使用路径定义新的依赖
* 模块可以返回一个对象，也可以返回一个function