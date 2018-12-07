###豆瓣电影小程序-页面
* 热映   
   1.功能：搜索、定位、banner轮播图、热映电影列表

   2.接口：

        搜索 ：
         + byKeyword: 'https://api.douban.com/v2/movie/search?q='
         + byTag: 'https://api.douban.com/v2/movie/search?tag='
        定位：
         + 百度地图：https://api.map.baidu.com/geocoder/v2/
        热映电影：
         + https://api.douban.com/v2/movie/in_theaters
* 待映

   接口：
        待映电影：https://api.douban.com/v2/movie/coming_soon
* 口碑Top250

   接口：
        口碑电影：https://api.douban.com/v2/movie/top250
* 我的

    1.登录：获取微信授权
    2.换肤

###二级页面
* 电影详情
    1.接口：https://api.douban.com/v2/movie/subject/'+id
* 影人详情
    1.接口：https://api.douban.com/v2/movie/celebrity/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b
    +++ apikey 可以获取更多信息

###接口处理

nginx 处理 https://api.douban.com/v2/    

nginx.conf中server下添加   
```
 location /v2/ { proxy_store off;proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;proxy_set_header X - Real - IP $remote_addr;proxy_set_header Referer 'no-referrer-when-downgrade';proxy_set_header User - Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';proxy_connect_timeout 600;proxy_read_timeout 600;proxy_send_timeout 600;proxy_pass https://api.douban.com/v2/;} 
 ```
 然后重启nginx，并将用到的接口https://api.douban.com前缀改为http://localhost，设置微信小程序 不校验合法域名

 ###模块化
 本demo中电影详情，影人详情中的获取数据的代码(function getFilmDetail(id){},function getPersonDetail(id){})单独抽离成一个public.js作为模块，
 通过
 ```
 module.exports = {
    getFilmDetail: getFilmDetail,
    getPersonDetail:getPersonDetail
}
```
对外暴露接口，使用的时候我们在对应page的页面js中调用 `require` （如：var getFilm = require('../../utils/public.js');引入公共代码）。在onLoad函数中，开始通过对外暴露变量 getFilmDetail，访问内部getFilmDetailt对象 `getFilm.getFilmDetail`
```
var that= this;
getFilm.getFilmDetail.call(that,id);

getFilm.getFilmDetail.call(that,id,function(data){ 
    console.log(that.data.filmDetail)
});
```
用call方法将函数的对象改变为 that指定的新对象
