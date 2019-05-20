const wxRequest = require('wxRequest.js');
const config = require('../config/config.js')
//热映
function fetchPopular (page,start,city){
  // return fetchFilms(page, config.apiList.popular, city, start, config.count).then(res=>{
  //   console.log(res)
  // })
  return fetchFilms(page, config.apiList.popular, start, config.count, city);
}
//待映
function fetchComming (page,start,city){
  return fetchFilms(page, config.apiList.coming, start, config.count,city);
}
function fetchTop  (page,start,city){
  return fetchFilms(page, config.apiList.top, start, config.count,city);
}
//通用的电影列表获取方式
function fetchFilms(page,url,start,count,city){
  return new Promise((resolve, reject) =>{
    var that = page
    var data ={
      apikey:config.apiKey,
      city: city,
      start: start,
      count:count
    }
    if(that.data.hasMore){
      wxRequest.getRequest(url,data).then(res=>{
        if(res.data.subjects.length === 0){
          that.setData({
            hasMore: false,
          })
        }else{
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
          })
          if(city){
            that.setData({
              city:city
            })
          }
        }
        wx.hideLoading();
        that.setData({
          showLoading: false
        })
        //resolve(res);   
      })
    }
  })
}
function getFilmDetail(id){
  return new Promise((resolve, reject) =>{
    var that = this;
    var url = config.apiList.filmDetail+id
    var data = {
      apikey:config.apiKey,
    }
    wxRequest.getRequest(url,data).then(res=>{
      resolve(res); 
    })
  })
}
function getPersonDetail(id){
  return new Promise((resolve, reject) =>{
    var that = this;
    var url = config.apiList.personDetail+id
    var data = {
      apikey:config.apiKey,
    }
    wxRequest.getRequest(url,data).then(res=>{
      resolve(res); 
    })
  })
}
function search(page,type,keyword,start){
  return new Promise((resolve, reject) =>{
    var that = page
    if(type == 0){
      var url = config.apiList.search.byKeyword+keyword
    }else{
      var url = config.apiList.search.byTag+keyword
    }
    var data ={
      apikey:config.apiKey,
      start: start,
      count:config.count
    }
    if(that.data.hasMore){
      wxRequest.getRequest(url,data).then(res=>{
        console.log(res)
        if(res.data.subjects.length === 0){
          that.setData({
            hasMore: false,
            isNull:true
          })
        }else{
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
          })
        }
        wx.hideLoading();
        that.setData({
          showLoading: false
        })
        //resolve(res); 
      })
    }
  })
}
module.exports = {
  fetchPopular:fetchPopular,
  fetchComming:fetchComming,
  fetchTop:fetchTop,
  getFilmDetail: getFilmDetail,
  getPersonDetail:getPersonDetail,
  search:search
}
  