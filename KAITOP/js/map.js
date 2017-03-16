 !function(){
        var infoWindow, map, level = 17,
            center = {lng: 120.273213, lat: 31.470299},
            features = [{type: "Marker", name: "江苏开拓信息与系统有限公司", desc: "地址: 江苏省无锡市蠡鑫湖大道2008号蠡湖商务园9-10号<br>电话: 0510-8522 1501<br>传真: 0510-8522 1503", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 120.273213, lat: 31.470153}}];
 
        function loadFeatures(){
            for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
                data = features[i];
                switch(data.type){
                    case "Marker":
                        feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
                            zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
                            content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' });
                        break;
                    case "Polyline":
                        for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                        }
                        feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
                        break;
                    case "Polygon":
                        for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                        }
                        feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
                            fillColor: data.fillColor, fillOpacity: data.fillOpacity });
                        break;
                    default: feature = null;
                }
                if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); }
            }
        }
 
        function mapFeatureClick(e){
            if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true}); }
            var extData = e.target.getExtData();
            infoWindow.setContent("<h5>" + extData.name + "</h5><div>" + extData.desc + "</div>");
            infoWindow.open(map, e.lnglat);
        }
 
        map = new AMap.Map("mapContainer", {center: new AMap.LngLat(center.lng, center.lat), level: level});
         
        loadFeatures();
 
        map.on('complete', function(){
            map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function(){
                map.addControl(new AMap.ToolBar);
            map.addControl(new AMap.OverView);
            map.addControl(new AMap.Scale);
            });
        })
         
    }();