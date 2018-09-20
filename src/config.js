import Bundle from '@/components/Bundle';
import React from 'react'
import Main from 'bundle-loader?name=[name].lazy!./container/channel/Main.js';
import order_Main from 'bundle-loader?name=[name].lazy!./container/order/Main.js';
import Sub from 'bundle-loader?name=[name].lazy!./container/channel/Sub.js';
import History from 'bundle-loader?name=[name].lazy!./container/channel/History.js';


//开发环境
export let env = process.env.NODE_ENV || 'development'

//异步组件
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : null
        }
    </Bundle>
);

//路由信息
export const route = [
    {
        id: 1,
        label: '1-1',
        path: '/channel_main',
        state:'xiaoshulin',
        component: createComponent(Main)
    },
    {
        id: 2,
        label: '2-1',
        path: '/order_main',
        state:'gggg',
        component: createComponent(order_Main)
    }
]
//导航栏配置
const config = [
    {
        id: 1,
        icon: 'bank',
        name: '渠道管理',
        options: [
            {
                id: '1-1',
                name: '渠道信息列表',
                path: '/channel_main',
                show: true,
                exact: true
            }
        ]
    },
    {
        id: 2,
        icon: 'bank',
        name: '订单管理',
        options: [
            {
                id: '2-1',
                name: '订单管理A',
                path: '/order_main',
                show: true,
                exact: true
            }
        ]
    }


]

export default config;