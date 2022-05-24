var car_template = `
<div>
<menu1 :item="2"></menu1>
<template v-if="cars.length">
    <div class="media border border-light" v-for="(item,index) in cars" style="margin:10px;">
        <img :src="store.state.imgurl+item.img" class="align-self-top mr-3" style="width:100px;">
        <div class="media-body">
            {{item.gname}}<br>
            单价：{{item.price}} &emsp;金额：{{item.num*item.price}}<br>
            <button @click="handleReduce(index)">-</button>
            {{item.num}}
            <button @click="handleAdd(index)">+</button>
            <a @click="handleRemove(index)"  class="float-right text-primary" style="margin-right:30px;">移除</a>
        </div>
    </div>
    <h6 class="float-right" style="margin-right:30px;">总价：¥{{totalPrice}}</h6>
    <br><br>
    <div class="text-center">
      <router-link to="/first" class="btn btn-primary">继续购书</router-link>
      <a class="btn btn-danger" @click="addorder()">结算</a>
    </div>
</template>
<div v-else>
    购物车还没有图书
</div>
</div>
  `
const car = {
  data() {
    return {
      cars:store.state.carts
    }
  },
  methods: {
    handleReduce(index) {
      store.countReduce(index);
    },
    handleAdd(index) {
      store.countAdd(index);
    },
    handleRemove(index) {
      store.Remove(index)
    },
    addorder(){
      store.addorder();
      router.push({
        path: 'order'
      })
    }
  },
  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0, len = this.cars.length; i < len; i++) {
        total += this.cars[i].price * this.cars[i].num;
      }
      return total.toString();
    }
  },

  template: car_template
}