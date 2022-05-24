<template>
	<div id="seven">
		<div class="header2">
			<div class="div">
				<div class="hei">
					<img class="img" @click="aa" src="../../static/img/首页/返回 (2).png"/>
				</div>
				<div id="img" @click.stop="ShowHidden = !ShowHidden">
					<p><img src="../../static/img/首页/分享 (1).png"/></p>
				</div>
				<div class="zai" v-if="ShowHidden" @click.stop="">
					<ul>
						<li v-for="zai in site">
							<img :src="zai.img"/>
							<span>{{zai.title}}</span>
						</li>
					</ul>
					<p>取消</p>
				</div>
			</div>
			<img class="img1" v-lazy="info[index].img"/>
		</div>
		<div class="but">
			<p style="color: red; font-weight: 600;font-size: 1.3rem;">{{info[index].title2}}<span style="color: black;opacity: 0.6;font-size: 1rem; font-weight: 1;">{{info[index].title3}}</span></p>
			<p>{{info[index].title1}}</p>
			<p>送至 全国 <span style="color: red;">有货</span><img @click="ding" src="../../static/img/首页/定位 (1).png"/></p>
		</div>
		<div class="yi" @click="yi">
			<p style="font-weight: 999; font-size: 1.2rem;">已选	<span style="font-weight: 99; font-size: 1rem;">默认</span>
				<img src="../../static/img/下一步.png"/>
			</p>
		</div>
		<div class="ping" @click="ping">
			<p style="font-weight: 999; font-size: 1.4rem;">评价	<span style="font-weight: 99; font-size: 1rem;">(0)</span></p>
			<img src="../../static/img/下一步.png"/>
		</div>
		<div class="zi" @click="three">
			进入店铺
		</div>
		<div class="footer2">
			<ul>
				<li><img @click="three" src="../../static/img/首页/_店铺.png"/></li>
				<li><img src="../../static/img/我的/消息 (2).png"/></li>
				<li><button class="but" @click="but">加入购物车</button></li>
				<li><button class="but1">立即购买</button></li>
			</ul>
		</div>
	</div>
	<!--<img src=""/>-->
</template>

<script>
	export default{
		name:"seven",
		data(){
			return{
				info:[],
				index:0,
				ShowHidden: false,
				site:[
					{"img":"../../static/img/首页/微信.png","title":"微信"},
					{"img":"../../static/img/首页/朋友圈.png","title":"朋友圈"},
					{"img":"../../static/img/首页/复制链接.png","title":"复制链接"}
				]
			}
		},
		methods:{
			but(){
				localStorage.setItem('yang',JSON.stringify(this.info)),
				this.$router.push({
					path:"/four"
				})
			},
			HiddenClick () {
			  this.ShowHidden = false
			 },
			 // 点击列表内，选中内容，并隐藏
			 ConBtn (val) {
			  alert('内容' + val)
			  this.ShowHidden = false
			 },
			aa(){
				this.$router.back()
			},
			ding(){
				this.$router.push({
					path:"/nine"
				})
			},
			yi(){
				this.$router.push({
					path:"/zhi"
				})
			},
			three(){
				this.$router.push({
					path:"/three"
				})
			},
			ping(){
				this.$router.push({
					path:"/ten"
				})
			}
		},
		mounted(){
			let temp=JSON.parse(localStorage.getItem('arr1'))
			let temp1=JSON.parse(localStorage.getItem('arr11'))
			this.info=temp
			console.log(temp)
			console.log(temp1)
			this.index=temp1
			document.addEventListener('click', this.HiddenClick)
		}
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
	list-style: none;
}
#seven{
	width: 100%;
	height: 100%;
	background-color: #EDEDED;
	z-index: 99;
	position: absolute;
	margin-bottom: -10rem;
}
.header2{
	width: 100%;
	height: 20rem;
	/*border: 1px solid black;*/
	background-color: white;
}
.header2 .img1{
	width: 80%;
	height: 15rem;
	margin-left: 10%;
	margin-top: 3rem;
}
.header2 .div{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	position: absolute;
	top: 0;
	left: 0;
}
.header2 .div .hei{
	width: 3rem;
	height: 3rem;
	background-color: grey;
	border-radius: 10rem;
}
.header2 .div .hei .img{
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
}
.header2 .div #img{
	width: 4rem;
	height: 2.5rem;
	background-color: grey;
	border-radius: 10rem;
	position: absolute;
	top: 0.3rem;
	right: 0.5rem;
}
.header2 .div #img img{
	width: 2rem;
	height: 2rem;
	margin-left: 01rem;
	margin-top: 0.2rem;
}
 .but{
	width: 100%;
	height: 7rem;
	background-color: white;
	margin-top: -0.9rem;
}
.but p{
	margin-left: 1rem;
	margin-top: 1rem;
}
.but p img{
	width: 2rem;
	height: 2rem;
	vertical-align: middle;
	margin-left: 13rem;
}
.zai{
	width: 100%;
	height: 8rem;
	background-color: white;
	position: fixed;
	bottom: 0;
	z-index: 22;
}
.zai p{
	width: 100%;
	height: 2rem;
	text-align: center;
	font-size: 1.2rem;
	opacity: 0.6;
	margin-top: 1rem;
	z-index: 1;
	/*border: 1px solid black;*/
	position: absolute;
	bottom: 0;
}
.zai ul li{
	width: 4rem;
	height: 5rem;
	/*border: 1px solid black;*/
	text-align: center;
	float: left;
	margin-left: 3rem;
	margin-top: 0.5rem;
	z-index: 1;
}
.zai ul li img{
	width: 3rem;
	height: 3rem;
}
.yi{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	background-color: white;
	margin-top: 0.1rem;
	line-height: 3rem;
}
.yi span{
	width: 3rem;
	height: 1.5rem;
	line-height: 1.5rem;
	display: inline-block;
	border: 1px solid black;
	text-align: center;
}
.yi img{
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: 28rem;
	right: 0;
}
.ping{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	background-color: white;
	margin-top: 0.5rem;
	line-height: 3rem;
}
.ping img{
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: 32rem;
	right: 0;
}
.zi{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	background-color: white;
	margin-top: 0.5rem;
	line-height: 3rem;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 999;
}
.footer2{
	width: 100%;
	height: 3.5rem;
	/*border: 1px solid black;*/
	background-color: white;
	position: fixed;
	bottom: 0;
	left: 0;
	line-height: 3.5rem;
}
.footer2 img{
	width: 2.5rem;
	margin-top: 0.5rem;
}
.footer2 ul{
	display: flex;
	justify-content: space-around;
}
.footer2 ul li .but{
	width: 5rem;
	height: 2rem;
	border-radius: 2rem;
	border: 1px solid white;
	background-color: red;
}
.footer2 ul li .but1{
	width: 6rem;
	height: 2rem;
	border-radius: 2rem;
	border: 1px solid white;
	background-color: orange;
}
</style>