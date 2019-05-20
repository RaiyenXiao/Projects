// pages/filmDetail/filmDetail.js
var getFilm = require('../../utils/public.js');
//  影评apikey：固定值 0b2bdeda43b5688921839c8ecb20399b
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail: {},
    showLoading: false,
    comments: [], //影评
    showTotal: true,
    showBtn: false, //是否显示展开收起按钮
    // 显示展开还是收起
    exchangeButton: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    var that = this;
    wx.showLoading({
      title: '正在拼命加载...',
      mask: true
    })
    that.setData({
      showLoading: true
    })
    let id = options.id;
    return getFilm.getFilmDetail(id).then(res => {
      //console.log(res)
      that.setData({
        filmDetail: res.data,
        showLoading: false,
      })
      //简介展开数据
      var query = wx.createSelectorQuery();
      query.select('.merchant-desc').boundingClientRect()
      query.exec((res) => {
        var descHeight = res[0].height;
        if (descHeight > 60) {
          that.setData({
            showBtn: true,//显示展开收起按钮
            showTotal: false,// 不是显示所有
            exchangeButton: true
          })
        } else {
          that.setData({
            showBtn: false,//显示展开收起按钮
            showTotal: true
          })
        }
      })
      wx.setNavigationBarTitle({
        title: res.data.title
      })
      wx.hideLoading();
    })

  },
  viewPersonDetail: function (e) {
    wx.navigateTo({
      url: '/pages/personDetail/personDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  showTotalIntro: function () {
    var that = this;
    if (that.data.showTotal) {
      that.setData({
        exchangeButton: true,
        showTotal: false
      })
    } else {
      that.setData({
        exchangeButton: false,
        showTotal: true
      })
    }
  },

})