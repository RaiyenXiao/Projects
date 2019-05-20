// pages/personDetail/personDetail.js
var getPerson = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personDetail: {},
    showLoading: false,
    allButton: false,
    summary: "",
    summaryAll: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '正在拼命加载...',
      mask: true
    })
    that.setData({
      showLoading: true
    })
    let id = options.id;
    getPerson.getPersonDetail(id).then(res => {
      //console.log(res)
      that.setData({
        personDetail: res.data,
        showLoading: false,
      })
      //简介展开数据
      if (res.data.summary.length >= 68) {
        res.data.summary = res.data.summary.substr(0, 68) + '...';
        that.setData({
          summary: res.data.summary,
          allButton: true
        })
      }else{
        that.setData({
          summary: res.data.summary,
          allButton: false
        })
      }
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      wx.hideLoading();
    })
  },
  summaryAll: function () {
    var that = this;
    that.setData({
      allButton: false,
      summary: that.data.personDetail.summary
    })
  },
  //跳转电影详情
  viewFilmDetail: function (e) {
    //console.log(e);
    wx.navigateTo({
      url: '/pages/filmDetail/filmDetail?id=' + e.currentTarget.dataset.id,
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})