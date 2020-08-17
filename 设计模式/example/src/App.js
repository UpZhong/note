import $ from 'jquery'
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import List from './List/List'

export default class {
    constructor(id) {
        this.$el = $("#" + id)
    }

    initShoppingCart() {
        const shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }

    initList() {
        const list = new List(this)
        list.init()
    }

    init() {
        this.initShoppingCart()
        this.initList()
    }
}