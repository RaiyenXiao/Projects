// pages/popular/popular.js
const config = require('../../config/config.js')
const fetch =  require('../../utils/public.js');
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: config.bannerList,
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
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '正在拼命加载...',
      mask:true
    })
    that.setData({
      showLoading: true
    })
    app.getCity().then(name=>{
      //console.log(name);
      wx.hideNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + name 
      })
      that.setData({
        showLoading: false
      })
      var pages = getCurrentPages()    //获取加载的页面
      var currentPage = pages[pages.length - 1]    //获取当前页面的对象
      return fetch.fetchPopular(currentPage,that.data.start,name)
    })
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("到底了");
    var that = this
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    return fetch.fetchPopular(currentPage,that.data.start,that.data.city)
  },

  //跳转电影详情
  viewFilmDetail:function(e){
    //console.log(e);
    wx.navigateTo({
      url: '/pages/filmDetail/filmDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  viewSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})