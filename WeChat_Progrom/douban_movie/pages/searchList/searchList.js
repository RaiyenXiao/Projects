// pages/searchList/searchList.js
const config = require('../../config/config.js')
const fetch =  require('../../utils/public.js');
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
    url:'',
    type:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    //console.log(decodeURIComponent(options.url))
    wx.showLoading({
      title: '正在拼命加载...',
       mask: true
    })
    that.setData({
      showLoading: true,
      type:options.type,
      keyword:options.keyword
    })
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    fetch.search(currentPage,that.data.type,that.data.keyword,that.data.start)
  },
  onReachBottom: function () {
    var that = this;
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    return fetch.search(currentPage,that.data.type,that.data.keyword,that.data.start)
  },
  //跳转电影详情
  viewFilmDetail: function (e) {
    //console.log(e);
    wx.navigateTo({
      url: '/pages/filmDetail/filmDetail?id=' + e.currentTarget.dataset.id,
    })
  },
})