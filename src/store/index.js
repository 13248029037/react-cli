import { observable, computed, action } from "mobx";

class Store {
    // 利用
    @observable state = {
        list: [1, 2, 3, 4],
        num: 123
    }

    @computed get getLength() {
        return this.state.list.length
    }

    @action setTodos() {
        new Promise((resolve) => {
            setTimeout(function () {
                resolve(Math.random() * 10)
            }, 3000)
        }).then(data => {
            this.state.list.push(data || '33')
        })
    }
    @action setNum() {
        setTimeout(() => {
            this.state.num = Math.random() * 100
        }, 2000);
    }
}

export default new Store()

