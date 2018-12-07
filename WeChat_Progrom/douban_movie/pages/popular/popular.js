// pages/popular/popular.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [
      { type: 'film', id: '26683290', imgUrl: '/dist/images/banner_1.jpg' },
      { type: 'film', id: '25793398', imgUrl: '/dist/images/banner_2.jpg' },
      { type: 'film', id: '26630781', imgUrl: '/dist/images/banner_3.jpg' },
      { type: 'film', id: '26415200', imgUrl: '/dist/images/banner_4.jpg' },
      { type: 'film', id: '3025375', imgUrl: '/dist/images/banner_5.jpg' }
    ],
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
    app.getCity(function () {
      wx.hideNavigationBarLoading()
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + app.globalData.city //在其他页面page中，使用globalData需要先var app=getApp()
      })
    })
    wx.showLoading({
      title: '正在拼命加载...',
      mask:true
    })
    that.setData({
      showLoading: true
    })
    //nginx处理 https://api.douban.com/v2/    nginx.conf中server下添加    location /v2/ { proxy_store off;proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;proxy_set_header X - Real - IP $remote_addr;proxy_set_header Referer 'no-referrer-when-downgrade';proxy_set_header User - Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';proxy_connect_timeout 600;proxy_read_timeout 600;proxy_send_timeout 600;proxy_pass https://api.douban.com/v2/;} 重启nginx
    wx.request({
      url: 'http://localhost/v2/movie/in_theaters',
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
    //console.log("到底了");
    var that = this;
    that.setData({
      hasMore: true
    })
    wx.request({
      url: 'http://localhost/v2/movie/in_theaters',
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