// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueLazyload from 'vue-lazyload'
import $ from 'jquery'
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap,{
	ak:"123456li"
	
});
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueLazyload,{
	loading:'/static/img/load.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//aMap.initAMapApiLoader({
//key: '3025364******22bdaf9b6', // 你的key
//plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.AMapManager', 'AMap.Marker'], // 应用功能项
//v: '1.4.4', // 版本
//uiVersion: '1.0', // ui版本
//})
