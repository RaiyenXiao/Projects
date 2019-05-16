// pages/top/top.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films:[],
    hasMore: true,
    showLoading: false,
    start:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '正在拼命加载...',
      mask:true
    })
    that.setData({
      showLoading: true
    })
    wx.request({
      url: 'http://localhost/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',
      data: {
        city: app.globalData.city,
        start: that.data.start,
        count: 20
      },
      method: 'GET',
      header: {
        "Content-Type": "application/xml,application/json"
      },
      success:(res)=>{
        //console.log(res)
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
        }
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.setData({
      hasMore: true
    })
    wx.request({
      url: 'http://localhost/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',
      data: {
        city: app.globalData.city,
        start: that.data.start,
        count: 20
      },
      method: 'GET',
      header: {
        "Content-Type": "application/xml,application/json"
      },
      success: (res) => {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length
          })
        }
        wx.hideLoading();
      }
    })
  },
  //跳转电影详情
  viewFilmDetail:function(e){
    //console.log(e);
    wx.navigateTo({
      url: '/pages/filmDetail/filmDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})