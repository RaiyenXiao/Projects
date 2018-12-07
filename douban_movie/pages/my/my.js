
var app = getApp();
Page({
  data: {
    gridList: [
      { enName: 'gallery', zhName: '相册', imgUrl: '/dist/images/gallery.png' },
      { enName: 'setting', zhName: '设置', imgUrl: '/dist/images/set.png' }
    ],
    skinList: [
      { title: '公路', imgUrl: '/dist/images/user_bg_1.jpg' },
      { title: '黑夜森林', imgUrl: '/dist/images/user_bg_2.jpg' },
      { title: '鱼与水', imgUrl: '/dist/images/user_bg_3.jpg' },
      { title: '山之剪影', imgUrl: '/dist/images/user_bg_4.jpg' },
      { title: '火山', imgUrl: '/dist/images/user_bg_5.jpg' },
      { title: '科技', imgUrl: '/dist/images/user_bg_6.jpg' },
      { title: '沙漠', imgUrl:'/dist/images/user_bg_7.jpg' },
      { title: '叶子', imgUrl: '/dist/images/user_bg_8.jpg' },
      { title: '早餐', imgUrl: '/dist/images/user_bg_9.jpg' },
      { title: '英伦骑车', imgUrl: '/dist/images/user_bg_10.jpg' },
      { title: '草原', imgUrl: '/dist/images/user_bg_11.jpg' },
      { title: '城市', imgUrl:'/dist/images/user_bg_12.jpg' }
    ],
    skin: ''
  },
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //用户已经授权过
          wx.getUserInfo({
            success: function (res) {
              //console.log(res.userInfo);
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data == "" || res.data== null) {
          that.setData({
            skin: that.data.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewSkin:function(){
    wx.navigateTo({
      url: '../skin/skin',
    })
  },
  getUserInfo(e) {
    wx.getUserInfo({
      success: msg => {
        //console.log(msg, 'success');
        this.setData({
          userInfo: e.detail.userInfo
        })
      },
      fail: e => {
        console.log(e, 'fail');
      }
    })
  },
})