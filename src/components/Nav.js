import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { observer, inject } from 'mobx-react'
import PropTypes from "prop-types";
import styles from '../less/Nav.less';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);
const SubMenu = Menu.SubMenu;
@inject('Setting')
@observer
export default class Nav extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props)
        this.gotoRouter = this.gotoRouter.bind(this);
        this.state = {
            collapsed: false,
            selectedKeys: [],
            props: {},
            path: ''
        }
    }
    componentWillMount() {
        this.getPath();  //获取当前导航的信息
    }
    componentDidMount() {
        if (this.state.props.openKeys) {  //就对导航张开显示解绑props
            this.setState({
                props: {}
            })
        }
    }
    componentWillReceiveProps(nextProps, context) {
        this.getPath();  //获取当前导航的信息
        if (nextProps.Setting.getCollaps) { //如果当前的状态是collaps,就对导航张开显示解绑props
            this.setState({
                props: {}
            })
        }
    }
    componentDidUpdate() {
        if (this.state.props.openKeys) {  //就对导航张开显示解绑props
            this.setState({
                props: {}
            })
        }
    }
    getPath() {
        console.info(this.context.router, 'this.context.router')
        let path = this.context.router.history.location.pathname;
        this.props.config.forEach(item => {
            item.options.forEach(node => {
                if (node.path === path) {
                    this.setState({
                        selectedKeys: [String(node.id)],
                        props: {
                            openKeys: [String(item.id)]
                        }
                    })
                }
            })
        })
    }

    gotoRouter(item) {
        this.context.router.history.push(item.item.props.path);
    }
    render() {
        return (
            <div className={this.props.Setting.getCollaps ? styles.navCollaps : styles.nav}>
                {/* 头部 */}
                {
                    <header className={styles.header}>
                        <span className={"iconfont icon-aixin " + styles.logo} style={{ fontSize: this.props.Setting.getCollaps ? '20px' : '36px' }}></span>
                        <span className={styles.title} style={{ opacity: this.props.Setting.getCollaps ? 0 : 1 }}>SOS</span>
                    </header>
                }
                <Menu
                    selectedKeys={this.state.selectedKeys}
                    mode="inline"
                    theme="dark"
                    onOpenChange={this.handleOpenChange}
                    inlineCollapsed={this.props.Setting.getCollaps}
                    {...this.state.props}
                >
                    {
                        this.props.config.map(item => {
                            return (
                                <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                                    {
                                        item.options.map(node => {
                                            return (
                                                <Menu.Item onClick={this.gotoRouter} key={node.id} path={node.path}>{node.name}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}