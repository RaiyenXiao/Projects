function getFilmDetail(id){
    var that = this;
    wx.request({
        url: 'http://localhost/v2/movie/subject/'+id,
        method: 'GET',
        header: {
            "Content-Type": "application/json,application/json"
        }, // 设置请求的 header
        success: function(res){
            //console.log(res)
            that.setData({
                filmDetail: res.data,
                showLoading: false,
            })
            wx.setNavigationBarTitle({
                title: res.data.title
            })
            wx.hideLoading();
        }
    })

}
function getPersonDetail(id){
    var that = this;
    wx.request({
        url: 'http://localhost/v2/movie/celebrity/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b',
        method: 'GET',
        header: {
            "Content-Type": "application/json,application/json"
        }, // 设置请求的 header
        success: function(res){
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
                  allButton:true
                })
            }
            wx.setNavigationBarTitle({
                title: res.data.name
            })
            wx.hideLoading();
        }
    })
}
module.exports = {
    getFilmDetail: getFilmDetail,
    getPersonDetail:getPersonDetail
}
  