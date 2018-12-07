// pages/skin/skin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skinList: [
      { title: '公路', imgUrl: '/dist/images/user_bg_1.jpg' },
      { title: '黑夜森林', imgUrl: '/dist/images/user_bg_2.jpg' },
      { title: '鱼与水', imgUrl: '/dist/images/user_bg_3.jpg' },
      { title: '山之剪影', imgUrl: '/dist/images/user_bg_4.jpg' },
      { title: '火山', imgUrl: '/dist/images/user_bg_5.jpg' },
      { title: '科技', imgUrl: '/dist/images/user_bg_6.jpg' },
      { title: '沙漠', imgUrl: '/dist/images/user_bg_7.jpg' },
      { title: '叶子', imgUrl: '/dist/images/user_bg_8.jpg' },
      { title: '早餐', imgUrl: '/dist/images/user_bg_9.jpg' },
      { title: '英伦骑车', imgUrl: '/dist/images/user_bg_10.jpg' },
      { title: '草原', imgUrl: '/dist/images/user_bg_11.jpg' },
      { title: '城市', imgUrl: '/dist/images/user_bg_12.jpg' }
    ],
    nowSkin:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'skin',
      success: function(res) {
        if (res.data == "" || res.data == null) {
          that.setData({
            nowSkin: that.data.skinList[0].imgUrl
          })
        } else {
          that.setData({
            nowSkin: res.data
          })
        }
      },
    })
  },
  chooseSkin:function(e){
    console.log(e)
    let url= e.currentTarget.dataset.url;
    wx.setStorage({
      key: 'skin',
      data: url,
      success:res=>{
        wx.navigateBack({
          delta: 1
        })//返回上一页
      }
    })
  }
})