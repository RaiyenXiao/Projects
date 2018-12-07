//app.js
App({
  onLaunch: function () {
    //初始化缓存
    this.initStorage()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
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
  globalData: {
    userInfo: null,
    city:''
  },
  getCity:function(cb){
    var that=this
    wx.getLocation({
      success: function(res) {
        //console.log(res)
        var locationParam = res.latitude + ',' + res.longitude 
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/',
          data: {
            ak: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
            location: locationParam,
            output: 'json',
            pois: '1'
          },
          method: 'GET',
          success: function (res) {
            //console.log(res)
            that.globalData.city = res.data.result.addressComponent.city.slice(0, -1)//例：北京市截取北京
            typeof cb == "function" && cb(res.data.result.addressComponent.city.slice(0, -1))
            //意思是判断cb是不是function,并且执行这行这个function
          },
          fail: function (res) {
            // 重新定位
            that.getCity();
          }
        })
      },
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