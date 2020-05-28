define(function () {
    function log() {
        console.log("element click")
    }

    function getElementById(id) {
        return document.getElementById(id)
    }

    return {
        log: log,
        getElementById: getElementById
    }
})