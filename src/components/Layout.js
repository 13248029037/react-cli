import React, { Component } from 'react'
import styles from '../less/router.less';
import { inject, observer } from 'mobx-react';

@inject('Setting')
@observer
export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
        }
        this.resize = this.resize.bind(this)
    }
    UNSAFE_componentWillMount() {
        window.addEventListener('resize', this.resize)
    }
    componentDidMount() {
        this.resize()
    }
    resize() {
        let height = window.document.documentElement.offsetHeight;
        this.setState({
            height: height + 'px'
        })
    }

    render() {
        return (
            <div className={styles.wrap} style={{ 'minHeight': this.state.height, marginLeft: this.props.Setting.getCollaps ? '80px' : '250px' }}>
                {this.props.children}
            </div>

        )
    }

}