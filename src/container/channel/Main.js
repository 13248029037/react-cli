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
    static childContextTypes ={
        name:PropTypes.string
    }
    constructor(props) {
        super(props)
        console.info(props,'fffffff')
        this.handleClick =this.handleClick.bind(this)
    }
    getChildContext(){
        return {
            name:'xiaoshulin'
        }
    }
    UNSAFE_componentWillMount() {
        this.props.Channel.setFoundationData();
    }
    handleClick(){
        this.props.history.push('/order_main')
    }
    render() {
        const num =0;
        return (
            <div style={{padding:'20px'}}>
                <Select
                  style={{ width: 200 }}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= num}
                >
                    {
                        this.props.Channel.getFoundationData.map(item => 
                        <Option key={item.id} value={item.id}>{item.name}</Option>)
                    }
                </Select>
                <div style={{backgroundColor:'#fff',marginTop:'20px'}}>
                {
                    this.props.Channel.getFoundationData.map(item =>
                    <span  key={item.id} style={{padding:'20px',margin:'10px'}}>{item.name}</span>)
                }
                </div>
                <div onClick={this.handleClick}>dianji</div>
            </div>
        )
    }
}