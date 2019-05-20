// pages/coming/coming.js
const fetch =  require('../../utils/public.js');
var app = getApp();
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
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    fetch.fetchComming(currentPage,that.data.start,'')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("到底了");
    var that = this
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    return fetch.fetchComming(currentPage,that.data.start,'')
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