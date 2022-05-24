<template>
	<div id="ten">
		<div class="header4">
			<img class="img" @click="aa" src="../../static/img/首页/返回.png"/>
			<!--<input type="" name="" id="" value="" />-->
			<p>评价</p>
		</div>
		<div class="section4">
		 	<el-radio-button  label="1" border name="1">全部</el-radio-button>
    		<el-radio-button  label="2" border name="1">好评</el-radio-button>
    		<el-radio-button  label="3" border name="1">中评</el-radio-button>
    		<el-radio-button  label="4" border name="1">差评</el-radio-button>
    		<el-radio-button  label="5" border name="1">晒图</el-radio-button>
    		<el-radio-button  label="6" border name="1">追评</el-radio-button>
		</div>
		<div class="footer4">
			<img src="../../static/img/首页/没有内容.png"/>
			<h3>该商品未收到任何评价</h3>
			<p>期待您的购买与评论</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"ten",
		data(){
			return{
				radio: '1'
			}
		},
		methods:{
			aa(){
				this.$router.back()
			}
		}
	}
</script>

<style>
* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#ten {
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 99;
		position: absolute;
		top: 0;
		left: 0;
		margin-bottom: -10rem;
	}
	.header4{
		width: 100%;
		height: 4rem;
		/*background-color: pink;*/
	}
	.header4 img{
		width: 2rem;
		height: 2rem;
		margin-top: 1rem;
	}
	.header4 p{
		position: absolute;
		top: 0.5rem;
		left: 44%;
		font-size: 2rem;
		color: red;
	}
	.section4{
		width: 100%;
		height: 5rem;
		background-color: #EDEDED;
	}
	.footer4{
		width: 100%;
		height: 70%;
		/*background-color: pink;*/
		text-align: center;
	}
	.footer4 img{
		width: 11rem;
		height: 10rem;
		margin-top: 5rem;
	}
	.footer4 h3{
		margin-top: 1rem;
	}
	.footer4 p{
		margin-top: 1rem;
		opacity: 0.6;
	}
</style>