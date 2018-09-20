import React, { Component } from 'react';
import Myrouter from './router/index'
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <Myrouter></Myrouter>
        )
    }
}
