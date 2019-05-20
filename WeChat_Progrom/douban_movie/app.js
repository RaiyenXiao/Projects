//app.js
const config = require('config/config.js')
const Util = require('utils/util.js');

App({
  globalData: {
    userInfo: null,
  },
  onLaunch: function () {
     //初始化缓存
     this.initStorage()
     // 获取用户信息
     wx.getSetting({
       success: res => {
         if (res.authSetting['scope.userInfo']) {
           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
           wx.getUserInfo({
             success: res => {
               // 可以将 res 发送给后台解码出 unionId
               this.globalData.userInfo = res.userInfo
 
               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
               // 所以此处加入 callback 以防止这种情况
               if (this.userInfoReadyCallback) {
                 this.userInfoReadyCallback(res)
               }
             }
           })
         }
       }
     })
  },
  getCity:function(){
    return new Promise(resolve=>{
      Util.getLocation('gcj02').then(res=>{
        //console.log(res)
        const { latitude, longitude } = res;//解构赋值
        config.location = `${latitude},${longitude}`; //模板字符串     
        return Util.getCityName(latitude, longitude)
      }).then(res=>{
        //console.log(res)
       config.city = res.data.result.addressComponent.city.slice(0, -1)
       resolve(config.city)
      })
    })
  },
  initStorage: function () {
    wx.getStorageInfo({
      success: function (res) {
        // 判断背景卡选择数据是否存在，没有则创建
        if (!('skin' in res.keys)) {
          wx.setStorage({
            key: 'skin',
            data: ''
          })
        }
      }
    })
  }
})