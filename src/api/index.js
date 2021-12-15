import axios from './axios';
import { Cookie } from './cookie';
// 区分环境（正式，开发）
let urlPrefix = '/excuse';
// if (process.env.NODE_ENV !== 'production') {
//   urlPrefix = '/api'
// }

export default {
    install(Vue) {
        Vue.prototype.$axios = (mode, url, param, head) => {
            return this.axiosRequest(mode, url, param, head);
        };
    },
    axiosRequest(mode = 'post', url, param, head = {}) {
        return this.ax(mode, url, param, head);
    },
    ax(mode, url, param, head) {
        let rewriteUrl = url;
        if (mode === 'get') {
            rewriteUrl += param || '';
        }
        if (Cookie.get('token')) {
            head = {
                token: Cookie.get('token'),
                'device-id': Cookie.get('deviceId'),
                'Content-Type': 'application/json',
            };
        } else {
            head = {
                'device-id': Cookie.get('deviceId'),
                'Content-Type': 'application/json',
            };
        }
        let headers = {
            headers: head,
        };
        let paramUrl = urlPrefix + rewriteUrl;
        return new Promise((resolve, reject) => {
            axios[mode](paramUrl, param, headers)
                .then((response) => {
                    let data = response.data;
                    if (data.code === 502) {
                        Cookie.remove('token');
                    } else if (data.code !== 200) {
                        // alert(data.msg)
                    }
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};
