import Vue from 'vue';
import $router from '../../router';
import { Cookie } from '../../api/cookie';
export default {
    getToken() {
        if (!Cookie.get('agent')) {
            let date = new Date().getTime();
            let id = date + this.randomCoding() + 'H5';
            Cookie.set('agent', id);
            // if (!Cookie.get('agent')) {
            //   $router.push({name: 'down'})
            // }
        }
    },
    toPage(name) {
        $router.push({ name: name });
    },
    goToDeatil(hotId, id) {
        $router.push({ name: 'deatil', query: { id: id, hotId: hotId } });
    },
    goBack() {
        $router.go(-1);
    },
    toDown() {
        $router.push({ name: 'down' });
    },
    openAdver(url) {
        if (/^(https?|ftp|file):\/\/.+$/.test(url)) {
            window.open(url);
        } else {
            window.open('http://' + url);
        }
    },
    randomCoding() {
        var result = [];
        let n = 3; // 这个值可以改变的，对应的生成多少个字母，根据自己需求所改
        for (var i = 0; i < n; i++) {
            // 生成一个0到25的数字
            var ranNum = Math.ceil(Math.random() * 25);
            // 大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
            // 然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
            result.push(String.fromCharCode(65 + ranNum));
        }
        return result.join('');
    },
    formatDate(value) {
        var secondTime = parseInt(value); // 秒
        var minuteTime = 0; // 分
        var hourTime = 0; // 小时
        if (secondTime > 60) {
            // 如果秒数大于60，将秒数转换成整数
            minuteTime = parseInt(secondTime / 60);
            secondTime = parseInt(secondTime % 60);
            if (minuteTime > 60) {
                hourTime = parseInt(minuteTime / 60);
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        let hourTime1 =
            parseInt(hourTime) < 10
                ? '0' + parseInt(hourTime)
                : parseInt(hourTime);
        let minuteTime1 =
            parseInt(minuteTime) < 10
                ? '0' + parseInt(minuteTime)
                : parseInt(minuteTime);
        let secondTime1 =
            parseInt(secondTime) < 10
                ? '0' + parseInt(secondTime)
                : parseInt(secondTime);
        return hourTime1 + ':' + minuteTime1 + ':' + secondTime1;
    },
    getBeforeDate(num, time) {
        let n = num;
        let d = '';
        if (time) {
            d = new Date(time);
        } else {
            d = new Date();
        }
        let s = d.setDate(d.getDate() - n);
        return s;
    },
    decryptImage(url_, tag, list) {
        let _this = this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url_);
        xhr.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8',
        );
        xhr.responseType = 'arraybuffer';
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.response;
                let url = _this.arrayBufferToBase64(response);
                Vue.set(list, tag, 'data:image/jpeg;base64,' + url);
            }
        };
    },
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i] ^ 1);
        }
        // var blob = new Blob([buffer], {type: 'image/jpeg'})
        // var imUrl = URL.createObjectURL(blob)
        return window.btoa(binary);
    },
};
