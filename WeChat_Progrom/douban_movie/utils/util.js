const config = require('../config/config.js')
const wxRequest = require('wxRequest.js');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取当前位置信息
function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

//根据坐标获取城市名称
function getCityName(latitude, longitude) {
  var data = {
    ak: config.baiduAK,
    location: `${latitude},${longitude}`, 
    output: 'json', 
    pois: '1'
  };
  var url = config.apiList.baiduMap;
  return wxRequest.getRequest(url, data)
}

module.exports = {
  formatTime: formatTime,
  getLocation:getLocation,
  getCityName:getCityName
}
