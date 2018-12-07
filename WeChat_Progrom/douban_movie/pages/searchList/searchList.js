// pages/searchList/searchList.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [],
    hasMore: true,
    showLoading: false,
    start: 0,
    isNull: false,
    keyword:'',
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    console.log(decodeURIComponent(options.url))
      wx.showLoading({
        title: '正在拼命加载...',
        mask: true
      })
      that.setData({
        showLoading: true,
        url: decodeURIComponent(options.url) + options.keyword
      })
      wx.request({
        url: that.data.url,
        data: {
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
              isNull: true
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
  onReachBottom: function () {
    var that = this;
    that.setData({
      hasMore: true
    })
    wx.request({
      url: that.data.url,
      data: {
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
  viewFilmDetail: function (e) {
    //console.log(e);
    wx.navigateTo({
      url: '/pages/filmDetail/filmDetail?id=' + e.currentTarget.dataset.id,
    })
  },
})