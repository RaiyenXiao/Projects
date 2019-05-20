// pages/search/search.js
const config = require('../../config/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotTag: config.hotTag,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  search:function(e){
    var that =this;
    console.log(e);
    var keyword = e.detail.value.keyword;
    if (keyword==""){
      wx.showModal({
        title: '提示',
        content: '请输入电影名称、演员或导演',
        showCancel: false,//是否显示取消按钮
        success: function (res) {
          return false
        }
      })
    }else{
      wx.redirectTo({
        url: "/pages/searchList/searchList?keyword=" + keyword+"&type=0"
      })
    }
  },
  searchTag:function(e){
    var that = this;
    var tag = e.currentTarget.dataset.tag;
    wx.redirectTo({
      //url: "/pages/searchList/searchList?url=" + that.data.search.byTag
      //测试发现传递的url参数会从？之后被截取丢掉 http://localhost/v2/movie/search?tag= 变为       http://localhost/v2/movie/search 
      //解决 利用encodeURIComponent对url进行编码
      url: "/pages/searchList/searchList?keyword=" + tag+"&type=1"
    })
  }
})