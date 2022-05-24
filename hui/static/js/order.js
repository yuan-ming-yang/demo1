var order_template = `
  <div>
    <menu1 :item="3"></menu1>
    <br><br>
    <div class="container">
    <h5>{{ msg }}</h5>
    </div>
    <template v-if="orders.length">
      <div class="media border border-light" v-for="(item,index) in orders" style="margin:10px;">
          <img :src="store.state.imgurl+item.img" class="align-self-top mr-3" style="width:100px;">
          <div class="media-body">
              {{item.gname}}<br>
              单价：{{item.price}}  &emsp;数量：{{item.num}}&emsp;金额：{{item.num*item.price}}<br>
            
          </div>
      </div>

      <br><br>
      <div class="text-center">
        <router-link to="/first" class="btn btn-primary">继续购物</router-link>
      </div>
    </template>
    <div v-else>
        还没有图书！
    </div>
  </div>
  `
const order= {
  data() {
    return {
      msg: '已购买图书如下：',
      orders:store.state.orders
    }
  },

  template: order_template
}