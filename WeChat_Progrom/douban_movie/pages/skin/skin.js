// pages/skin/skin.js
const config = require('../../config/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skinList: config.skinList,
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