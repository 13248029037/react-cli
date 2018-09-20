import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from "prop-types";

@inject('Setting')
@observer
export default class Home extends Component {

    static contextTypes={
        router:PropTypes.object.isRequired
    }

    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push('/car');
    }

    render() {
        return (
            <div style={{width:'100%',top:'60px',position:'absolute',bottom:'0px',overflow:'auto'}} onClick={this.handleClick}>
                子渠道
                <div style={{height:300}}></div>
                <div style={{height:300}}></div>
                <div style={{height:300}}></div>
                <div style={{height:300}}></div>
                <div style={{height:300}}></div>
            </div>

        )
    }
}