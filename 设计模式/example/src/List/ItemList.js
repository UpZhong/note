import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import getCart from '../ShoppingCart/getCart'
import log from '../utils/log'

export default class {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.getCart = getCart()
        this.$el = $("<div>")
    }

    initContent() {
        let tem = `<p>名称：${this.data.name}</p>
                 <p>价格：${this.data.price}</p>`
        this.$el.append(tem)
    }

    initBtn() {
        let btn = $("<button>")
        btn.text('加入购物车')
        this.$el.append(btn)
        const _this = this
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                { name: 'addToCart', from: '加入购物车', to: '从购物车删除' },
                { name: 'delFromCart', from: '从购物车删除', to: '加入购物车' }
            ],
            methods: {
                onAddToCart: function () {
                    _this.addToCartHandle()
                    updateText()
                },
                onDelFromCart: function () {
                    _this.delFromCartHandle()
                    updateText()
                }
            }
        })
        function updateText(){
            btn.text(fsm.state)
        }
        btn.click(() => {
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.delFromCart()
            }
        })
    }

    // @log('add')
    addToCartHandle(){
        this.getCart.addData(this.data)
    }

    // @log('del')
    delFromCartHandle(){
        this.getCart.deleteData(this.data.id)
    }

    render() {
        this.list.$el.append(this.$el)
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }
}