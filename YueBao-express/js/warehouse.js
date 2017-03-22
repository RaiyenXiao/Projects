/* ======================================================================
 * @description 专业入仓 js文件（echarts模块化引用）
 * @author Raiyen
 * @time 20150318
 * ======================================================================
 */
$(function(){
	//路径配置
	    require.config({
	        paths: {
	            echarts: 'http://echarts.baidu.com/build/dist'
	        }
	    });
	    // 使用
	    require(
	        [
	            'echarts',
	            'echarts/chart/map'
	        ],
	        function (ec) {
	            // 基于准备好的dom，初始化echarts图表
	            var myChart = ec.init(document.getElementById('map'));
	            option = {
	            	title : {
			        text: '跃豹品牌入仓团队分布',
			        subtext: '(提示：移动到标记位置可查看分布地点)',
			        x:'20',
			        y:'20',
			        textStyle:{
			        	color:'#ed6c00'
			        }
			        },
				    tooltip : {
				    	trigger: 'item'
				    },
					series : [
				    {
				        type: 'map',
				        mapType: 'china',
				        hoverable: false,//关闭区域高亮选择
				        roam:false,//是否开启滚轮缩放和拖拽漫游
				        itemStyle:{
			                normal:{
			                  areaStyle:{color:'#7599b7'}
			                }
			            },
				        data : [],
				        markPoint : {
				                symbolSize: 6,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
				                
				                itemStyle: {
				                    normal: {
				                    	color:'#c11920',            // 标注边线线宽，单位px，默认为1
				                        label: {
				                            show: false
				                        }
				                    }//标记颜色
				                },
				                data : [
				                    {name: "跃豹品牌-上海"},
				                    {name: "跃豹品牌-武汉"},
				                    {name: "跃豹品牌-天津"},
				                    {name: "跃豹品牌-北京"},
				                    {name: "跃豹品牌-广州"},
				                    {name: "跃豹品牌-西安"},
				                    {name: "跃豹品牌-沈阳"},
				                    {name: "跃豹品牌-济南"},
				                    {name: "跃豹品牌-成都"},
				                    {name: "跃豹品牌-金华"}
				                ]
				            },
				            geoCoord: {
				                "跃豹品牌-上海":[121.48,31.22],
				                "跃豹品牌-武汉":[114.31,30.52],
				                "跃豹品牌-天津":[117.2,39.13],
				                "跃豹品牌-北京":[116.46,39.92],
				                "跃豹品牌-广州":[113.23,23.16],
				                "跃豹品牌-西安":[108.95,34.27],
				                "跃豹品牌-沈阳":[123.38,41.8],
				                "跃豹品牌-济南":[117.00,36.4],
				                "跃豹品牌-成都":[104.06,30.67],
				                "跃豹品牌-金华":[119.64,29.12]
				            }
				       }
				        /*{//热区光圈
				            name: '跃豹品牌',
				            type: 'map',
				            mapType: 'china',
				            data:[],
				            markPoint : {
				                symbol:'emptyCircle',
				                symbolSize : function (v){
				                    return 10 + v/100
				                },
				                effect : {
				                    show: true,
				                    color:'#f59646',
				                    shadowBlur : 0
				                },
				                itemStyle:{
				                    normal:{
				                   		label:{show:false}
				                    },
				                    emphasis:{
				                    	color:'#f59646',
				                    	label:{show:false}
				                    }
				                },
				                data : [
				                    {name: "上海"},
				                    {name: "武汉"},
				                    {name: "天津"},
				                    {name: "北京"},
				                    {name: "广州"},
				                    {name: "西安"},
				                    {name:"沈阳"},
				                    {name: "济南"},
				                    {name: "成都"},
				                    {name: "金华"}
				                ]
				            }
				        }*/
				    ]
				};
	                // 为echarts对象加载数据 
	                myChart.setOption(option);
	            }
	        );
})