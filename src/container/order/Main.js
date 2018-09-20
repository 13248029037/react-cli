import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from "prop-types";
import { Select } from 'antd';
const Option  = Select.Option;
@inject('Setting')
@observer
export default class Home extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state ={
            arr:[
                {
                    id:1,
                    value:'xiao'
                },
                {
                    id:2,
                    value:'shu'
                },
                {
                    id:3,
                    value:'lin'
                }
            ]
        }
    }
    handleClick() {

    }
   

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }


    render() {
        return (
            <div style={{ width: '100%', top: '60px', position: 'absolute', bottom: '0px', overflow: 'auto' }} onClick={this.handleClick} >
                主retetetertr
                <div style={{ height: 300 }}></div>
                <div style={{ height: 300 }}></div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                {
                    this.state.arr.map(item =>  <Option key={item.id} value={item.id}>{item.value}</Option>)
                }
                </Select>,
            </div>
        )
    }
}

