history方式管理页面路由:
pushState:增加状态，接收三个参数：data title url
popstate：监听状态改变（浏览器的回退和前进） 此时可以通过event.state拿到传递的数据

hash方式管理页面路由：
可以通过location.hash 设置hash的值，传递数据可以在hash后通过"？"、"/"等传递
hashchange：监听hash值的改变，可以通过location.hash拿到hash值及传递的数据