import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from "prop-types";
import { Select } from 'antd';
const Option = Select.Option;
@inject('Channel')
@observer
export default class Home extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    getChildContext(){
        return {
            name:'xiaoshulin'
        }
    }
    static childContextTypes ={
        name:PropTypes.string
    }
    constructor(props) {
        super(props)
        console.info(props,'fffffff')
        this.handleClick =this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push('/order_main')
    }
    componentWillMount() {
        this.props.Channel.setFoundationData();
    }
    render() {
        return (
            <div style={{padding:'20px'}}>
                <Select
                  style={{ width: 200 }}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {
                        this.props.Channel.getFoundationData.map(
                            item => <Option key={item.id} value={item.id}>{item.name}</Option>
                        )
                    }
                </Select>
                <div style={{backgroundColor:'#fff',marginTop:'20px'}}>
                {this.props.Channel.getFoundationData.map(item =>
                    <span style={{padding:'20px',margin:'10px'}} key={item.id}>{item.name}</span>
                )}     
                </div>
                <Child age={2324}></Child>
                <div onClick={this.handleClick}>dianji</div>
            </div>            
        )
    }
}

class Child extends Component{
    constructor(props,context){
        super(props,context)
        console.info(this.context,'child-context')
        console.info(this.props,'propsprops')
    }
    static contextTypes ={
        name:PropTypes.string
    }
    static propTypes ={
        age:PropTypes.number.isRequired
    }
    render(){
        return <div>
            <span>{this.props.age}</span>
        </div>
    }
}

