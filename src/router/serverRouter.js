import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Header from '../components/Header'
import config, { route } from '../config'
@inject('Setting')
@observer
export default class RouterView extends Component {
    render() {
        return (
            // <Router>
                <div>
                    <Nav config={config}></Nav>
                    <Header></Header>          
                    <Switch>
                            <Layout>
                                    {route.map(item => <Route state={item.state} key={item.id} label={item.label} path={item.path} component={item.component}></Route>)}
                                    {/* <Redirect from="*" to="/channel_main"></Redirect> */}
                            </Layout>
                    </Switch>
                </div>
            // </Router>
        )
    }

}