import $ from 'jquery'
import getCart from './getCart'

export default class {
    constructor(app) {
        this.app = app
        this.$el = $('<div>').css({
            "padding": "10px",
            "border-bottom": "1px sollid #000"
        })
        this.cart = getCart()
    }

    initBtn() {
        let btn = $("<button>购物车</button>")
        btn.click(() => {
            this.showCart()
        })
        this.$el.append(btn)
    }

    showCart() {
        alert(this.cart.getList())
    }

    render() {
        this.app.$el.append(this.$el)
    }
    init() {
        this.initBtn()
        this.render()
    }
}