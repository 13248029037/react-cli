import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from "prop-types";
@inject('Setting')
@observer
export default class Home extends Component {
    static contextTypes={
        router:PropTypes.object.isRequired
    }
    render() {
        return (
            <div style={{width:'100%',top:'60px',position:'absolute',bottom:'0px',overflow:'auto'}} >
                子渠道
                <div style={{height:300}}>44</div>
                <div style={{height:300}}>3242</div>
                <div style={{height:300}}>ret</div>
                <div style={{height:300}}>try</div>
                <div style={{height:300}}>rtyr</div>
            </div>
        )
    }
}