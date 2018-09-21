import { observable, computed, action } from "mobx";

class Store {
    // 利用
    @observable data = {
        list: [1, 2, 3, 4],
        num: 123
    }

    @computed get getLength() {
        return this.data.list.length
    }

    @action.bound setTodos() {
        new Promise((resolve) => {
            setTimeout(function () {
                resolve(Math.floor(Math.random() * 100000))
            }, 3000)
        }).then(datas => {
            this.data.list.push(datas || '33')
        })
    }
    @action setNum() {
        setTimeout(() => {
            this.data.num = Math.random() * 100
        }, 2000);
    }
}

export default new Store()
