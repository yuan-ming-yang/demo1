var first_template=`
<div>
<menu1 :item="1"></menu1>
<div class="row">
    <div v-for="(item,index) in goods" @click="selectgood(item.gid)" class="card col-6 border border-0">
        <div class="card-body">
            <img class="card-img-top" :src="store.state.imgurl+item.img" alt="Card image" style="width:90%">
            <p class="card-text">{{item.gname}}&ensp;{{item.price|yuan}}</p>
        </div>
    </div>
</div>
`
const first = {
    data(){
        return{
            goods:store.state.goods
        }
    },
    // 自定义过滤器
    filters:{
        yuan:function(yuan){
            return yuan + "元"
        }
    },
    methods:{
        selectgood:function(id){
            router.push({
                path:'detail',
                query:{id:id}
            })
            
        }
    },
    template: first_template
}