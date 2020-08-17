class Cart {
    constructor() {
        this.list = []
    }
    addData(data) {
        this.list.push(data)
    }
    deleteData(id) {
        this.list = this.list.filter(item => {
            return item.id !== id
        })
    }
    getList() {
        return this.list.map(item => {
            return item.name
        }).join('\n')
    }
}


let getCart = (function () {
    let cart
    return function () {
        if (!cart) {
            cart = new Cart()
        }
        return cart
    }
})()
export default getCart
