var detail_template = `
<div>
    <p class="text-center text-white bg-primary" style="padding:10px;">图书详情</p>
    <div class="media border border-light" v-for="(item,index) in detail" style="margin:10px;">
        <img :src="store.state.imgurl+item.img" class="align-self-top mr-3" style="width:150px;">
        <div class="media-body">
            图书名：{{item.gname}}<br><br>
            价格：{{item.price}}元 <br><br>
            <a @click="addgood(detail[0])" class="btn btn-primary">加入购物车</a>
        </div>
    </div>
    <br><br>
    <div class="text-center">
      <router-link to="/first" class="btn btn-danger">返回首页</router-link>
      <router-link to="/car" class="btn btn-danger">购物车</router-link>
    </div>

</div>
  `
const detail = {
  data() {
    return {

    }
  },
  methods: {
    addgood(o) {
      var list = store.state.carts;
      var has = false;
      for (var j in list) {
        var id = list[j].gid;
        if (o.gid == id) {
          alert("你已添加该图书");
          has = true;
        }
      }
      if (!has) {
        store.addcart(o);
        alert("添加成功！");
      }
    },
  },
  computed: {
    detail: function () {
      var id = this.$route.query.id;
      console.log(id);
      return store.state.goods.filter(function (number) {
          return number.gid == id
      })
    }
  },

  template: detail_template
}