<template>
  <div style="position: relative;width: 100%;height: 100%;">
    <div id="container" style="width:100%; height:100%">
    </div>
    <div id="panel"></div>
    <div id="myPageTop" style="position: absolute;top: 20px;right: 50px;background: #fff;">
      <table>
        <tr>
          <td>
            <label>请输入关键字：</label>
          </td>
        </tr>
        <tr>
          <td>
            <input v-model="input" id="tipinput"/><button @click="searchAddress">搜索</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import AMap from 'AMap';
 
  var map, placeSearch;
  export default {
    name: "AMap",
    data() {
      return {
        input: ''
      }
    },
    mounted: function () {
      this.AMapInit()
    },
    methods: {
      AMapInit: function () {
        map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 10
        })
        AMap.service(["AMap.PlaceSearch"], function () {
          //构造地点查询类
          placeSearch = new AMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            citylimit: false,  //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            renderStyle: 'default'
          });
 
        });
        // 添加列表点选监听事件
        AMap.event.addListener(placeSearch, "selectChanged", this.selectAddress);
      },
      searchAddress() {
        placeSearch.search(this.input);
 
      },
      selectAddress(e) {
        //这里获得点选地点的经纬度
        let location = e.selected.data.location;
        console.log('lng',location.lng);
        console.log('lat',location.lat);
        // Do Something
      }
    }
  }
</script>
<style type="text/css">
  html,body,#app{
    height: 100%;
    width: 100%;
  }
  #panel {
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 80px;
    right: 10px;
    width: 280px;
  }
</style>