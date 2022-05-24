<template>
	<div id="she">
		<div class="header11">
			<img @click="img" src="../../static/img/首页/返回.png"/>
			<span>设置</span>
		</div>
		<div class="section11">
			<ul>
				<li v-for="yang in arr">
					<div>
						<p style="font-weight: 777;">{{yang.title}}</p>
						<p style="font-size: 0.9rem; opacity: 0.8;">{{yang.title1}}</p>
					</div>
					<div>
						<img :src="yang.img"/>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
	<!--<img src=""/>-->
</template>

<script>
	export default{
		name:"she",
		data(){
			return{
				arr:[
					{"title":"登录密码","title1":"定期更改密码，保护账户安全","img":"../../static/img/下一步.png"},
					{"title":"注销账号","title1":"注销账号是不可恢复的操作","img":"../../static/img/下一步.png"},
					{"title":"手机验证","title1":"订单短信  登录  找回密码等使用到","img":"../../static/img/下一步.png"},
					{"title":"实名认证","title1":"认证后，指定店铺或商品享有优惠价格","img":"../../static/img/下一步.png"},
					{"title":"支付密码","title1":"在订单支付时，使用余额支付时使用到","img":"../../static/img/下一步.png"},
					{"title":"反馈意见","title1":"向我们反馈问题，我们第一时间给你解答","img":"../../static/img/下一步.png"},
					{"title":"常见问题","title1":"平台公告，购物指南，新手上路等指导","img":"../../static/img/下一步.png"},
					{"title":"咨询中心","title1":"关于平台咨询，用户发表等问题","img":"../../static/img/下一步.png"},
					{"title":"商家中心","title1":"切换到商家中心，方便商家管理","img":"../../static/img/下一步.png"},
					{"title":"清除缓存","title1":"","img":"../../static/img/下一步.png"},
					{"title":"当前版本","title1":"","img":"../../static/img/下一步.png"},
					{"title":"关于我们","title1":"","img":"../../static/img/下一步.png"}
				]
			}
		},
		methods:{
			img(){
				this.$router.back()
			}
		}
}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
#she{
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 33;
	position: absolute;
	top: 0;
	left: 0;
}
.header11{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	position: fixed;
	background-color: white;
	top: 0;
	left: 0;
	z-index: 22;
}
.header11 img{
	height: 2rem;
	margin-top: 0.5rem;
}
.header11 span{
	margin-left: 8rem;
	font-size: 1.5rem;
}
.section11{
	width: 100%;
	/*height: 20rem;*/
	/*border: 1px solid black;*/
	position: absolute;
	top: 3rem;
	left: 0;
}
.section11 ul li{
	width: 100%;
	height: 4rem;
	z-index: 11;
	background-color: white;
	border-top: 1px solid darkgray;
	display: flex;
	justify-content: space-between;
}
.section11 ul li p{
	margin-left: 1rem;
	margin-top: 0.5rem;
}
.section11 ul li img{
	width: 2rem;
	margin-top: 1rem;
}
</style>