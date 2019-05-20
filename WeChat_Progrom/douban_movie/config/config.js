/*
备注
city: 城市（在程序载入时获取一次）
count: 返回结果数量
baiduAK: 百度地图AK
apiList: api列表
hotKeyword: 搜索页热门关键词关键词
hotTag: 搜索页热门类型
bannerList: 首页（热映页）轮播图列表列表
skinList: “我的”页面背景列表
*/
var basicUrl = 'http://localhost/v2'
var apiUrl = 'https://api.douban.com/v2/'
module.exports = {
    city: '',
    location:'0,0',
    count: 20,
    baiduAK:'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
    apiKey:'0b2bdeda43b5688921839c8ecb20399b',
    apiList:{
        popular: basicUrl + '/movie/in_theaters',
        coming: basicUrl + '/movie/coming_soon',
        top: basicUrl + '/movie/top250',  
        search: {
            byKeyword: basicUrl + '/movie/search?q=',
            byTag: basicUrl + '/movie/search?tag='
        },
        filmDetail: basicUrl + '/movie/subject/',
        personDetail: basicUrl + '/movie/celebrity/',
        baiduMap: 'https://api.map.baidu.com/geocoder/v2/',
    },
    hotTag: ['动作', '喜剧', '爱情', '悬疑'],
    bannerList: [
        { type: 'film', id: '26683290', imgUrl: '/dist/images/banner_1.jpg' },
        { type: 'film', id: '25793398', imgUrl: '/dist/images/banner_2.jpg' },
        { type: 'film', id: '26630781', imgUrl: '/dist/images/banner_3.jpg' },
        { type: 'film', id: '26415200', imgUrl: '/dist/images/banner_4.jpg' },
        { type: 'film', id: '3025375', imgUrl: '/dist/images/banner_5.jpg' }
    ],
    skinList: [
        { title: '公路', imgUrl: '/dist/images/user_bg_1.jpg' },
        { title: '黑夜森林', imgUrl: '/dist/images/user_bg_2.jpg' },
        { title: '鱼与水', imgUrl: '/dist/images/user_bg_3.jpg' },
        { title: '山之剪影', imgUrl: '/dist/images/user_bg_4.jpg' },
        { title: '火山', imgUrl: '/dist/images/user_bg_5.jpg' },
        { title: '科技', imgUrl: '/dist/images/user_bg_6.jpg' },
        { title: '沙漠', imgUrl:'/dist/images/user_bg_7.jpg' },
        { title: '叶子', imgUrl: '/dist/images/user_bg_8.jpg' },
        { title: '早餐', imgUrl: '/dist/images/user_bg_9.jpg' },
        { title: '英伦骑车', imgUrl: '/dist/images/user_bg_10.jpg' },
        { title: '草原', imgUrl: '/dist/images/user_bg_11.jpg' },
        { title: '城市', imgUrl:'/dist/images/user_bg_12.jpg' }
    ],

}