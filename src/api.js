import { env } from './config'
import { message } from 'antd';
import axios from 'axios';
import VM from '@/utils/init'
axios.defaults.withCredentials = true; //默认带取cookie



//api接口
const API = {

}
// 接口地址。以页面为单位分组
const API_URI = {
    getFoundationData: '/foundationdata/category/all', //城市
}

const http = axios.create(
    {
        'development': {
            baseURL: 'http://192.168.3.115:8512/erp-gateway',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'test': {
            baseURL: 'http://test.crm.aihuishou.com',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'uat': {
            baseURL: 'http://uat.crm.aihuishou.com',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'production': {
            headers: {
                baseURL: 'http://192.168.3.115:8512/erp-gateway',
                'Content-Type': 'application/json'
            }
        }
    }[env]
)

http.interceptors.request.use(config => {
    VM.showLoading();
    let s = setTimeout(() => {
        VM.removeLoading();
        clearTimeout(s);
    }, 5000)
    return config;
}, err => Promise.reject(err));

http.interceptors.response.use(res => {
    VM.removeLoading();
    let body = res.data || res;
    if (!body) {
        message.error('数据出错');
        throw body;
    } else if (body.code === 401) { // 如果401，跳转到登录
        message.error('请重新登录');
        setTimeout(() => {
            let {
                casLoginUrl,
                appSecurityUrl,
                appRedirectParameter,
                casServiceParameter
            } = body.data;
            let encodeUrl = `${appSecurityUrl}?${appRedirectParameter}=${encodeURIComponent(window.location.origin)}`;
            let loginUrl = `${casLoginUrl}?${casServiceParameter}=${encodeURIComponent(encodeUrl)}`;
            window.open(loginUrl, '_self');
        }, 2000);
        throw body;
    } else if (body.code === 403) { // 如果403，提示无权限
        message.error('没有权限');
        throw body;
    } else if (body.code === 441) { // 刷新页面
        typeof window !== 'undefined' && window.location.reload();
        throw body;
    } else if (body.code !== 200) {
        body.msg = body.resultMessage;
        message.error(body.msg || '没有返回数据');
        throw body;
    }
    if (body.totalCount) {
        return {
            items: body.data,
            totalCount: body.totalCount,
            pageSize: body.pageSize,
            page: body.page,
        }
    }
    return body.data;
}, err => {
    message.error(err);
    throw err;

});


const ajax = {
    get(args) {
        let { url, data, callback, options, params } = args;
        return http.request({
            url: url,
            method: 'get',
            params,
        }).then(result => {
            callback && callback(null, result)
            return result;
        }).catch(error => {
            console.log('error', error)
            error.msg = error.resultMessage;
            message.error(error.msg );
            callback && callback(error)
        })
    },
    post(args) {
        let { url, data, callback, options, params } = args;
        return http.request({
            url: url,
            method: 'post',
            data: JSON.stringify(data),
            params: JSON.stringify(params),
        }).then(result => {
            callback && callback(null, result)
            return result;
        }).catch(error => {
            console.log(error)
            error.msg = error.resultMessage;
            message.error(error.msg );
            callback && callback(error)
        })
    },
    postFile(args) {
        let { url, data, callback, options, params } = args;
        return http.request({
            url: url,
            method: 'post',
            data,
        }).then(result => {
            callback && callback(null, result)
            return result;
        }).catch(error => {
            console.log(error)
            error.msg = error.resultMessage;
            message.error(error.msg );
            callback && callback(error)
        })
    },
}

API.getFoundationData = (args) => {
    let _args = {
        url: API_URI.getFoundationData,
    }
   return ajax.post(Object.assign(_args, args))
}

export default API;




