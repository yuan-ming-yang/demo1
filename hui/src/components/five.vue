<template>
	<div id="five">
		<div class="header22">
			<div class="tou">
				<div><img class="img1" @click="img1" src="../../static/img/首页/返回 (2).png"/></div>
				<div>
					<img class="img2" src="../../static/img/首页/消息 (1).png"/>
					<img @click="ll" src="../../static/img/我的/设置 (1).png"/>
				</div>
			</div>
			<div class="center">
				<img @click="center" src="../../static/img/我的/头像.png"/>登录/注册
			</div>
			<div class="secend">
				<ul>
					<li v-for="yang in site">
						<img :src="yang.img"/>
						<p>{{yang.title}}</p>
					</li>
				</ul>
			</div>
			<div class="section22">
				<ul>
					<li v-for="yang in sites">
						<img :src="yang.img"/>
						<p>{{yang.title}}</p>
					</li>
				</ul>
			</div>
			<div class="third">
				<h4>我的资产</h4>
				<ul>
					<li v-for="yang in arr">
						<img :src="yang.img"/>
						<p>{{yang.title}}</p>
					</li>
				</ul>
			</div>
			<div class="fourth">
				<h4>我的服务</h4>
				<ul>
					<li v-for="yang in arr1" @click="aa">
						<img :src="yang.img"/>
						<p>{{yang.title}}</p>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
	<!--<img src=""/>-->
</template>

<script>
	export default{
		name:"five",
		data(){
			return{
				site:[
					{"img":"../../static/img/我的/我的收藏.png","title":"商品收藏"},
					{"img":"../../static/img/我的/店铺关注.png","title":"店铺关注"},
					{"img":"../../static/img/我的/历史浏览.png","title":"历史浏览"},
					{"img":"../../static/img/我的/我的余额.png","title":"我的余额"},
				],
				sites:[
					{"img":"../../static/img/我的/待付款.png","title":"待付款"},
					{"img":"../../static/img/我的/待收货 (1).png","title":"待收货"},
					{"img":"../../static/img/我的/3.1待评价 (1).png","title":"待评价"},
					{"img":"../../static/img/我的/退货退款.png","title":"退款/退货"},
				],
				arr:[
					{"img":"../../static/img/我的/我的资产.png","title":"我的资产"},
					{"img":"../../static/img/我的/积分中心.png","title":"积分中心"},
					{"img":"../../static/img/我的/我的卡券.png","title":"我的卡券"},
					{"img":"../../static/img/我的/我的红包.png","title":"我的红包"},
				],
				arr1:[
					{"img":"../../static/img/我的/Shipping address.png","title":"收货地址"},
					{"img":"../../static/img/我的/领券中心.png","title":"领券中心"},
					{"img":"../../static/img/我的/反馈留言.png","title":"反馈留言"},
					{"img":"../../static/img/我的/帮助中心.png","title":"帮助中心"},
				]
			}
		},
		methods:{
			ll(){
				this.$router.push({
					path:"/she"
				})
			},
			img1(){
				this.$router.push({
					path:"/"
				})
			},
			center(){
				this.$router.push({
					path:"/login"
				})
			},
			aa(){
				this.$router.push({
					path:"/zhi"
				})
			}
		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
#five{
	width: 100%;
	height: 100%;
	background-color: #EDEDED;
	position: absolute;
	top: 0;
	left: 0;
}
#five .header22{
	width: 100%;
	height: 13rem;
	background-color: #FB2668;
	position: fixed;
	top: 0;
	left: 0;
}
#five .header22 .tou{
		width: 100%;
		height: 2.5rem;
		/*border: 1px solid black;*/
		display: flex;
		justify-content: space-between;
		z-index: 99;
	}
#five .header22 .tou div img{
		width: 2rem;
		height: 2rem;
		/*margin-top: 0.5rem;*/
	}
	#five .header22 .tou div .img2{
		width: 1.5rem;
		height: 1.5rem;
	}
	#five .header22 .center{
		width: 100%;
		height: 4rem;
		/*border: 1px solid black;*/
		color: white;
	}
	#five .header22 .center img{
		width: 4rem;
		height: 4rem;
		vertical-align: middle;
		margin-left: 1rem;
	}
	#five .header22 .secend{
		width: 100%;
		height: 4rem;
		/*border: 1px solid black;*/
		color: white;
	}
	#five .header22 .secend ul{
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin-top: 0.5rem;
	}
	#five .header22 .secend ul li{
		width: 4rem;
		height: 3rem;
		/*border: 1px solid black;*/
	}
	#five .header22 .secend ul li img{
		width: 1.5rem;
		height: 1.5rem;
	}
	.section22{
		width: 100%;
		height: 5rem;
		/*border: 1px solid black;*/
		background-color: white;
		border-top-left-radius: 2rem;
		border-top-right-radius: 2rem;
	}
	.section22 ul{
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.section22 ul li{
		width: 5rem;
		height: 3rem;
		/*border: 1px solid black;*/
		margin-top: 1rem;
	}
	.section22 ul li img{
		width: 2rem;
		height: 2rem;
	}
	.third{
		width: 100%;
		height: 7rem;
		/*border: 1px solid black;*/
		background-color: white;
		margin-top: 1rem;
	}
	.third h4{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		margin-top: 1rem;
		/*border: 1px solid black;*/
		padding-left: 1rem;
	}
	.third ul{
		width: 100%;
		height: 3rem;
		border-top: 1px solid gray;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.third ul li{
		width: 5rem;
		height: 3rem;
		/*border: 1px solid black;*/
		margin-top: 1rem;
	}
	.third ul li img{
		width: 2rem;
		height: 2rem;
	}
	.fourth{
		width: 100%;
		height: 7rem;
		/*border: 1px solid black;*/
		background-color: white;
		margin-top: 1rem;
	}
	.fourth h4{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		margin-top: 1rem;
		/*border: 1px solid black;*/
		padding-left: 1rem;
	}
	.fourth ul{
		width: 100%;
		height: 3rem;
		border-top: 1px solid gray;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.fourth ul li{
		width: 5rem;
		height: 3rem;
		/*border: 1px solid black;*/
		margin-top: 1rem;
	}
	.fourth ul li img{
		width: 2rem;
		height: 2rem;
	}
</style>