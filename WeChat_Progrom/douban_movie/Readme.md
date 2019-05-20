### 更新的内容
1. 用Promise封装了微信小程序的网络请求`wx.request`
2. 将请求的`url`整合到公共config.js
3. 模块化电影请求接口，热映、待映、口碑，使用Promise优化简化代码
4. Promise优化城市获取接口
5. 二级页面电影详情、演员详情代码简化

#### wxRequest.js
```
function wxPromise(method, url, data){
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: method,
      data: data,
      //在header中统一封装报文头，这样不用每个接口都写一样的报文头定义的代码
      header: {
      "Content-Type": "application/xml,application/json" 
      },
      success: function(res){
        setTimeout(function () {
          wx.hideLoading();
        }, 100);
        //这里可以根据自己项目服务端定义的正确的返回码来进行，接口请求成功后的处理，当然也可以在这里进行报文加解密的统一处理
        if(res.data.rtnCode == "000000"){
          resolve(res);
        }else{
          //如果出现异常则弹出dialog
          wx.showModal({
            title: '提示',
            content: res.data.errCode + '系统异常',
            confirmColor: '#118EDE',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
              }
            }
          });
        }
      },
      fail: function(res){
        setTimeout(function () {
          wx.hideLoading();
        }, 100);
        wx.showToast({
          title: '服务器暂时无法连接',
          icon: 'loading',
          duration: 2000
        })
        reject(res);
      }
    });
  });
}

function getRequest(url, data){
  return wxPromise("GET", url, data);
}

function postRequest(url, data){
  return wxPromise("POST", url, data);
}

module.exports = {
  wxPromise: wxPromise,
  postRequest: postRequest,
  getRequest: getRequest,
}
```

### 感谢
1. http://es6.ruanyifeng.com/#docs/promise 阮一峰 es6入门
2. https://www.jianshu.com/p/79c82f0609af 微信小程序进阶－网络Promise封装
