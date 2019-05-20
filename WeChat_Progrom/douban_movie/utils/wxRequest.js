const Promise = require('es6-promise.min.js');
function wxPromise(method, url, data) {
    //返回一个Promise对象
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: {
                "Content-Type": "application/xml,application/json"
            },
            success: function (res) {
                setTimeout(function () {
                    wx.hideLoading();
                }, 100);
                resolve(res);
            },
            fail: function (res) {
                setTimeout(function () {
                    wx.hideLoading();
                }, 100);
                wx.showToast({
                    title: '服务器暂时无法连接',
                    icon: 'none',
                    duration: 2000
                })
                reject(res);
            }
        });
    });
}


function getRequest(url, data) {
    return wxPromise("GET", url, data);
}

function postRequest(url, data) {
    return wxPromise("POST", url, data);
}

module.exports = {
    postRequest: postRequest,
    getRequest: getRequest,
}
