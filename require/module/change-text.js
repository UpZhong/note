define(function () {
    var ele = document.querySelector("p");
    function writeTxt() {
        ele.innerText = "hello word"
    }
    return {
        writeTxt: writeTxt
    }
})