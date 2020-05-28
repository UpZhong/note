define(['util', './change-text'], function (util, changeText) {
    var ele = util.getElementById('btn');
    addEventListener = function () {
        ele.addEventListener('click', function (event) {
            event.preventDefault();
            util.log();
            changeText.writeTxt();
        }, false)
    }
    return {
        addEventListener: addEventListener
    }
})