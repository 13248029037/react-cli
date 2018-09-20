import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { message } from 'antd';
import { Spin } from 'antd';
import styles from '@/less/loading'

let loadings = []

Component.prototype.showTip = (obj) => {
    if (typeof obj === undefined) {
        message.error('出现错误');
        return;
    }
    if (typeof obj === 'string') {
        message.error(obj, 1.5);
    } else if (typeof obj === 'object') {
        if (obj.type === 'success') {
            message.success(obj.message, 1.5);
        } else {
            message.error(obj.message, 1.5);
        }
    } else {
        message.error(obj, 1.5);
    }

}


function showLoading() {
    if (!loadings.length) {
        let div = document.createElement("div");
        loadings.push(div);
        ReactDOM.render(<Spin size="large" />, div);
        div.className = styles.load;
        document.body.appendChild(div);
        setTimeout(() => {
            removeLoading();
        }, 5000)
    }
}

function removeLoading() {
    if (loadings.length) {
        document.body.removeChild(loadings[0]);
        loadings = [];
    }

}

export default {
    showLoading,
    removeLoading,
}

