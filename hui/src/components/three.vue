<template>
	<div id="three">
		<div class="header2">
			<ul>
				<li><img @click="img" src="../../static/img/首页/返回.png"/></li>
				<li><h2>全部商品</h2></li>
				<li><img src="../../static/img/首页/_店铺.png"/></li>
			</ul>
		</div>
		<div class="center">
			<ul>
				<li v-for="(yang,index) in dd" @click="yy(yang,index)">
					<img v-lazy="yang.img" />
					<p>{{yang.title1}}</p>
					<p style="color: red; font-weight: 600;">{{yang.title2}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "three",
		data() {
			return {
				dd:[
					{"img":"../../static/img/首页/c5584649623f9d23.jpg","title1":"订书机","title2":"￥12.00","title3":"￥15.00"},
					{"img":"../../static/img/首页/e408dbeeee152bf7.jpg","title1":"可爱小怪兽","title2":"￥7.00","title3":"￥10.00"},
					{"img":"../../static/img/首页/d3e38cb1235b432c.jpg","title1":"小小招财猫","title2":"￥35.00","title3":"￥45.00"},
					{"img":"../../static/img/首页/f46011974e987d9d.jpg","title1":"小公仔","title2":"￥24.00","title3":"￥30.00"},
					{"img":"../../static/img/首页/24437fa8642c794f.jpg","title1":"轻奢透明地球仪","title2":"￥219.00","title3":"￥259.00"},
					{"img":"../../static/img/首页/316335424b97e78f.jpg","title1":"泡泡男孩","title2":"￥98.00","title3":"￥139.00"},
					{"img":"../../static/img/首页/61dcbaa57e033e55.jpg","title1":"鎏玉堂","title2":"￥168.00","title3":"￥208.00"},
					{"img":"../../static/img/首页/b54971425795b993.jpg","title1":"村田稻夫流沙画","title2":"￥68.00","title3":"￥88.00"}
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

<style lang="scss" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#three {
		width: 100%;
		height: 100%;
		background-color: #EDEDED;
		z-index: 99;
		position: absolute;
		/*margin-bottom: -10rem;*/
	}
	.header2{
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 99;
	}
	.header2 ul{
		display: flex;
		justify-content: space-between;
	}
	.header2 ul li h2{
		margin-top: 0.5rem;
	}
	.header2 ul li img{
		width: 2rem;
		margin-top: 0.5rem;
	}
	.center {
		width: 100%;
		height: 35rem;
		border: 1px solid black;
		position: absolute;
		top: 3rem;
		left: 0;
	}
	
	.center ul li {
		width: 11rem;
		height: 15rem;
		/*border: 1px solid darkgray;*/
		float: left;
		background-color: white;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	
	.center ul li img {
		width: 11rem;
	}
	
	.center ul li p {
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
</style>