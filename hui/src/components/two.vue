<template>
	<div id="two">
		<div class="header3">
			<div class="tou">
				<div>
					<input @click="input" type="text" placeholder="请输入关键词"/>
					<img class="img2" src="../../static/img/首页/搜索.png"/>
				</div>
				<div><img class="img1" @click="img" src="../../static/img/首页/搜索.png"/></div>
			</div>
		</div>
		<div class="section3">
			<!--<router-view></router-view>
			<ul class="ul1">
				<li><router-link to="/two/two1">生活用品</router-link></li>
			</ul>-->
			<el-tabs :tab-position="tabPosition">
			    <el-tab-pane label="生活用品">
			    	<ul class="center">
						<li v-for="yang in hahaha">
							<img v-lazy="yang.img"/>
							<p>{{yang.title1}}</p>
							<p style="color: red; font-weight: 600;">{{yang.title2}}</p>
						</li>
					</ul>
			    </el-tab-pane>
			    <el-tab-pane label="办公用品">
			    	<ul class="center">
						<li v-for="yang in mua">
							<img v-lazy="yang.img"/>
							<p>{{yang.title1}}</p>
							<p style="color: red; font-weight: 600;">{{yang.title2}}</p>
						</li>
					</ul>
			    </el-tab-pane>
			 </el-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		name:"two",
		data(){
			return{
				 tabPosition: 'left',
				dd:[
					{"img":"../../static/img/首页/24437fa8642c794f.jpg","title1":"轻奢透明地球仪","title2":"￥219.00","title3":"￥259.00"},
					{"img":"../../static/img/首页/316335424b97e78f.jpg","title1":"泡泡男孩","title2":"￥98.00","title3":"￥139.00"},
					{"img":"../../static/img/首页/61dcbaa57e033e55.jpg","title1":"鎏玉堂","title2":"￥168.00","title3":"￥208.00"},
					{"img":"../../static/img/首页/b54971425795b993.jpg","title1":"村田稻夫流沙画","title2":"￥68.00","title3":"￥88.00"}
				],
				hahaha:[
					{"img":"../../static/img/首页/c5584649623f9d23.jpg","title1":"订书机","title2":"￥12.00","title3":"￥15.00"},
					{"img":"../../static/img/首页/d3e38cb1235b432c.jpg","title1":"小小招财猫","title2":"￥35.00","title3":"￥45.00"},
					{"img":"../../static/img/首页/24437fa8642c794f.jpg","title1":"轻奢透明地球仪","title2":"￥219.00","title3":"￥259.00"},
					{"img":"../../static/img/首页/b54971425795b993.jpg","title1":"村田稻夫流沙画","title2":"￥68.00","title3":"￥88.00"}
				],
				mua:[
					{"img":"../../static/img/首页/e408dbeeee152bf7.jpg","title1":"可爱小怪兽","title2":"￥7.00","title3":"￥10.00"},
					{"img":"../../static/img/首页/f46011974e987d9d.jpg","title1":"小公仔","title2":"￥24.00","title3":"￥30.00"},
					{"img":"../../static/img/首页/316335424b97e78f.jpg","title1":"泡泡男孩","title2":"￥98.00","title3":"￥139.00"},
					{"img":"../../static/img/首页/61dcbaa57e033e55.jpg","title1":"鎏玉堂","title2":"￥168.00","title3":"￥208.00"}
				]
			}
		},
		methods:{
			input(){
				localStorage.setItem('data100',JSON.stringify(this.dd)),
				this.$router.push({
					path:"/six"
				})
			},
			img(){
				localStorage.setItem('data100',JSON.stringify(this.dd)),
				this.$router.push({
					path:"/six"
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
#two {
		width: 100%;
		height: 100%;
		/*background-color: #EDEDED;*/
		position: absolute;
		top: 0;
		left: 0;
		margin-bottom: 4rem;
	}
.tou{
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		line-height: 3rem;
		z-index: 99;
		background-color: white;
	}
	.tou .img1{
		width: 2.5rem;
		height: 2.5rem;
		margin-top: 0.4rem;
	}
	.tou .img2{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: 0.7rem;
		left: 2.5rem;
	}
	.tou input{
		width: 15rem;
		height: 2rem;
		border-radius: 100rem;
		padding-left: 2rem;
		border: 1px solid black;
		margin-left: 2rem;
	}
	.section3{
		width: 100%;
		height: 20rem;
		/*background-color: red;*/
		position: fixed;
		top: 3rem;
	}
	.section3 .center{
		width: 100%;
		height: 35rem;
		/*border: 1px solid black;*/
		background-color: #EDEDED;
	}
	.section3 .center li{
		width: 8rem;
		height: 12rem;
		border: 1px solid darkgray;
		float: left;
		background-color: white;
		margin-left: 0.3rem;
		margin-top: 0.5rem;
	}
	.section3 .center li img{
		width: 8rem;
	}
	.section3 .center li p{
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
</style>