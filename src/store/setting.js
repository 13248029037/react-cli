import { observable, computed, action } from "mobx";

class Store {
    // 基本设置
    @observable state = {
        collaps:false
    }
    @computed get getCollaps() {
        return this.state.collaps
    }
    @action.bound setCollaps() {
        this.state.collaps = !this.state.collaps;
    }
}

export default new Store()

