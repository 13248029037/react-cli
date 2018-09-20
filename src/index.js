import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppSrote from './store/index';
import HomeStore from './store/home';
import Setting from './store/setting';
import Channel from './store/channel';
import { Provider } from 'mobx-react'


//引入
import '@/utils/init.js' //定义全局的组件

import 'babel-polyfill';
//引入样式

import '@/lib/iconfont.css';
import '@/lib/init.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

let store = {
    AppSrote,
    HomeStore,
    Setting,
    Channel
}
ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>

    , document.querySelector('#app'))

if (module.hot) {
    module.hot.accept();
}

