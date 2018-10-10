import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { createContext } from 'react'
import Child from './Child'
import Father from './Father'
import PropTypes from "prop-types";
import { Select } from 'antd';
const Option = Select.Option;
const { Provider, Consumer } = createContext()
@inject('Channel')
@observer
export default class Home extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    static childContextTypes = {
        name: PropTypes.string
    }
    constructor(props) {
        super(props)
        console.info(props, 'fffffff')
        // this.handleClick = this.handleClick.bind(this)
        this.ss = {
            age: 'xiao',
            name: 'dddsfsf'
        }
        this.Dom = null
    }
    getChildContext() {
        return {
            name: 'xiaoshulin'
        }
    }
    UNSAFE_componentWillMount() {
        this.props.Channel.setFoundationData();
    }
    componentDidMount() {
        console.info(this.Dom, 'DomDomDomDomDomDomDom')
        this.Dom.eat();
    }
    handleClick(ee, rrr) {
        console.info(this)
        console.info(ee)
        console.info(ee.target)
        console.info(rrr)
        // this.sing()
        // this.props.history.push('/order_main')
    }
    sing() {
        console.info(this)
    }

    render() {
        const num = 0;
        return (
            <Provider value={this.ss}>
                <div style={{ padding: '20px' }} >
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
                    <div style={{ backgroundColor: '#fff', marginTop: '20px' }} >
                        {
                            this.props.Channel.getFoundationData.map(item =>
                                <span key={item.id} style={{ padding: '20px', margin: '10px' }}>{item.name}</span>)
                        }
                    </div>
                    <div onClick={(event) => { this.handleClick(event, 55) }}>dian</div>
                </div>
                <Child>
                    <Consumer>
                        {(context) => (
                            <div>
                                <div>{context.name}</div>
                                <div>{context.age}</div>
                            </div>
                        )}
                    </Consumer>
                </Child>
                <Father ref={(Dom) => { this.Dom = Dom }}></Father>
                <div>{this.props.Channel.getState}</div>
                <span onClick={() => this.props.Channel.addStage()}>点击</span>
            </Provider>

        )
    }
}

