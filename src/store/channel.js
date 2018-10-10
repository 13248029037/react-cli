import { observable, computed, action,autorun } from 'mobx'
import API from '@/api'

class Store {
    @observable data = {
        foundationData:[],
        stage:0
    }
    @computed get getFoundationData() {
        return this.data.foundationData
    }
    @computed get getState(){
       return this.data. stage
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
    @action addStage(){
        this.data.stage =    this.data.stage  +1;
    }
}

 const  ss = new Store()
autorun(()=>{
    console.info(ss.data.stage)
})

setInterval(() =>{
    ss.data.stage =  ss.data.stage+1;
},2000)

export default new Store()