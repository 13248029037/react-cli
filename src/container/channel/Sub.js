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
    }
    render() {
        return (
            <div style={{width:'100%',top:'60px',position:'absolute',bottom:'0px',overflow:'auto'}} >
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