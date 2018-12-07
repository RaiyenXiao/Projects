// pages/filmDetail/filmDetail.js
var getFilm = require('../../utils/public.js');
//  影评apikey：固定值 0b2bdeda43b5688921839c8ecb20399b
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail:{},
    showLoading:false,
    comments:[] //影评
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    var that= this;
    wx.showLoading({
      title:'正在拼命加载...',
      mask:true
    })
    that.setData({
      showLoading: true
    })
    let id = options.id;
    getFilm.getFilmDetail.call(that,id,function(data){ 
      console.log(that.data.filmDetail)
    });
  //   wx.request({
  //     url: 'http://localhost/v2/movie/subject/3168101/comments?apikey=0b2bdeda43b5688921839c8ecb20399b',
  //     method: 'GET',
  //     header: {
  //         "Content-Type": "application/json,application/json"
  //     }, // 设置请求的 header
  //     success: function(res){
  //         //console.log(res)
  //         that.setData({
  //             filmDetail: res.data.subject,
  //             showLoading: false,
  //             comments:res.data.comments.slice(0,3)//截取前三个评论
  //           })
  //         console.log(that.data.comments)
  //         wx.setNavigationBarTitle({
  //             title: res.data.subject.title
  //         })
  //         wx.hideLoading();
  //     }
  // })

  },
  viewPersonDetail:function(e){
    wx.navigateTo({
      url: '/pages/personDetail/personDetail?id=' + e.currentTarget.dataset.id,
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