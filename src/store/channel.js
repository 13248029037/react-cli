import { observable, computed, action } from 'mobx'
import API from '@/api'

class Store {
    @observable data = {
        foundationData:[]
    }
    @computed get getFoundationData() {
        return this.data.foundationData
    }
    @action setFoundationData() {
        API.getFoundationData({
            data:{}
        }).then(data =>{
            if(data){
                this.data.foundationData=data || []
            }
        })
    }
}

export default new Store()