var menu_template = `
<div>
  <h2 style="text-align:center;background-color: lightSkyBlue; height:55px;padding:5px;">欢迎来到夏目书城</h2>
  <nav class="navbar bg-white border border-top-2 border-light">
    <router-link to="/first" :class="['nav-link',item==1 ? 'text-danger' : 'text-dark']">首页</router-link>
    <router-link to="/car" :class="['nav-link',item==2 ? 'text-danger' : 'text-dark']">购物车</router-link>
    <router-link to="/order" :class="['nav-link',item==3 ? 'text-danger' : 'text-dark']">我的订单</router-link>
    
  </nav>
</div>
  `
Vue.component('menu1', {
  props: {
    item : String,
  },
  data: function () {
    return {
    }
  },
  template: menu_template,
});