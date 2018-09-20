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
    constructor(props) {
        super(props)
        // VM.showLoading();
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
            </div>
            
        )
    }
}

