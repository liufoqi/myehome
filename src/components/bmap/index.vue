<template>
  <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
  <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
  <div id="allmap" class="map">
  </div>
</template>
<script>
  export default {
    props: {

    },
    data() {
      return {

      }
    },
    mounted(){
      this.ready();
    },
    methods:{
      ready(){
        // var map = new BMap.Map('allmap');
        // var point = new BMap.Point(104.075796, 30.659684);
        // map.centerAndZoom(new BMap.Point(104.047404, 30.696035), 6);
        // map.addControl(new BMap.MapTypeControl());
        // map.setCurrentCity('不存在');
        // map.enableScrollWheelZoom(true);
        // map.enableDoubleClickZoom(true);
        // var marker = new BMap.Marker(point);
        // map.addOverlay(marker);
        // var map = new BMap.Map("allmap");    // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别
        // //添加地图类型控件
        // map.addControl(new BMap.MapTypeControl({
        //   mapTypes:[
        //     BMAP_NORMAL_MAP,
        //     BMAP_HYBRID_MAP
        //   ]}));
        // map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true);
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        map.centerAndZoom("全国",6);  //初始化地图,设置城市和地图级别。
        var pointA = new BMap.Point(106.486654,29.490295);  // 创建点坐标A--大渡口区
        // var pointB = new BMap.Point(106.581515,29.615467);  // 创建点坐标B--江北区
        var pointB = new BMap.Point(115.581515,32.615467);  // 创建点坐标B--江北区
        alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
        var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  //定义折线
        map.addOverlay(polyline);     //添加折线到地图上

      }
    }

  }
</script>

<style scoped>
  map{
    width:100%;
    height:600px;
  }

  #allmap {
    width: 100%;
    height:600px;
    overflow: hidden;margin:0;
  }

</style>

