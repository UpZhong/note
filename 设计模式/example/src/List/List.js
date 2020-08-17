import $ from 'jquery'
import { LIST_URL } from '../config/config'
import CreateItem from './CreateItem'

export default class {
    constructor(app) {
        this.app = app
        this.$el = $('<div>')
    }

    getData() {
        return fetch(LIST_URL).then(res => {
            return res.json()
        })
    }

    initList(list) {
        list.forEach(item => {
            let listItem = CreateItem(this, item)
            listItem.init()
        })
    }

    render() {
        this.app.$el.append(this.$el)
    }

    init() {
        this.getData().then(res => {
            this.initList(res)
        }).then(
            this.render()
        )
    }

}