var store = {
    state: {
        url:'http://localhost:8080/login',
        imgurl:'img/',
        username:'',
        goods: [{
            gid: "1",
            gname: "城南旧事",
            // description:"",
            img: "1.jpg",
            price: 26,
            num:1
        },
        {
            gid: "2",
            gname: "三体",
            //description:"",
            img: "2.jpg",
            price: 32,
            num:1
        },
        {
            gid: "3",
            gname: "许三观卖血记",
            //description:"",
            img: "3.jpg",
            price: 28,
            num:1
        },
        {
            gid: "4",
            gname: "简爱",
           // description:"",
            img: "4.jpg",
            price: 39,
            num:1
        },
        {
            gid: "5",
            gname: "倾城",
            //description:"",
            img: "5.jpg",
            price: 15,
            num:1
        },
        {
            gid: "6",
            gname: "梦里花落知多少",
            //description:"",
            img: "6.jpg",
            price: 15,
            num:1
        },
        {
            gid: "7",
            gname: "白银时代",
            //description:"",
            img: "7.jpg",
            price: 15,
            num:1
        },
        {
            gid: "8",
            gname: "黄金时代",
            //description:"",
            img: "8.jpg",
            price: 15,
            num:1
        },
        {
            gid: "9",
            gname: "白棉花",
            //description:"",
            img: "9.jpg",
            price: 33,
            num:1
        },
        {
            gid: "10",
            gname: "许茂和他的女儿们",
            //description:"",
            img: "10.jpg",
            price: 25,
            num:1
        },
        ],
        carts:[],
        orders:[]//将购买过的商品传送到order中
    },
    addcart(newValue){
        this.state.carts.push(newValue);
    },
    countReduce(index){
        if(this.state.carts[index].num === 1) return;
        this.state.carts[index].num--;
    },
    countAdd(index) {
        this.state.carts[index].num++;
    },
    // 从数组中删除数组
    Remove(index){
        this.state.carts.splice(index,1);
    },
    //从购物车跳转到订单页
    addorder() {
        for(i=0; i < this.state.carts.length; i++){
          this.state.orders.push(this.state.carts[i]);
        };
        this.state.carts.splice(0,this.state.carts.length);
      },
}