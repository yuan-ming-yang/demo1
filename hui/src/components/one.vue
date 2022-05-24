<template>
	<div id="one">
		<div class="header11">
			<div class="pic">
				<ul class="tu">
					<transition-group name="img">
						<li v-for="(item,index) in pic" :key="index1" v-show="index===mark" @mouseenter="stop" @mouseleave="go">
							<img v-lazy="item" :key="index">
						</li>
					</transition-group>
				</ul>
			</div>
			<div class="tou">
				<div><img class="img1" @click="ff" src="../../static/img/首页/我的 (3).png"/></div>
				<div>
					<input @click="input" type="text" placeholder="请输入关键词"/>
					<img class="img2" src="../../static/img/首页/搜索.png"/>
				</div>
				<div><img class="img1" src="../../static/img/首页/消息 (1).png"/></div>
			</div>
			<div class="block">
			    <el-carousel height="11rem">
			      <el-carousel-item v-for="yang in aa">
			        <img v-lazy="yang.img"/>
			      </el-carousel-item>
			    </el-carousel>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
			    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
			  </el-tabs>
		</div>
		<div class="zhong">
			---限时促销---
		</div>
		<div class="section11">
			<div class="lun">
				 <el-carousel height="11rem">
			      <el-carousel-item v-for="yang in bb">
			      	<ul>
			      		<li><img v-lazy="yang.img"/></li>
			      		<li>
			      			<p>{{yang.title1}}</p>
					        <p style="color: red; font-weight: 600;font-size: 1.3rem;">{{yang.title2}} <span style="color: black;opacity: 0.6;font-size: 1rem; font-weight: 1;">{{yang.title3}}</span></p>
					        <p style="color: red;">{{yang.title4}}</p>
			      		</li>
			      	</ul>
			      </el-carousel-item>
			    </el-carousel>
			</div>
			<div class="center">
				<ul>
					<li v-for="(yang,index) in cc"  >
						<img v-lazy="yang.img" @click="y(yang,index)"/>
						<p>{{yang.title1}}</p>
						<p style="color: red; font-weight: 600;">{{yang.title2}} </p>
						<button  @click="p(yang,index)">加入购物车</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="zhong1">
			---猜你喜欢---
		</div>
		<div class="footer11">
			<div class="center">
				<ul>
					<li v-for="(yang,index) in dd" @click="yy(yang,index)">
						<img v-lazy="yang.img"/>
						<p>{{yang.title1}}</p>
						<p style="color: red; font-weight: 600;">{{yang.title2}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!--<img src=""/>-->
</template>

<script>
	export default {
		name: "one",
		data() {
			return {
				data100:[],
				data200:[],
				arr1:[],
				index1:"",
				arr2:[],
				index2:"",
				arr0:[],
				index0:"",
				activeName: 'first',
				pic: [
					"../../static/img/首页/350.jpg",
					"../../static/img/首页/350 (1).jpg",
					"../../static/img/首页/350 (2).jpg",
					"../../static/img/首页/350 (3).jpg",
					"../../static/img/首页/350 (5).jpg"
				],
				aa:[
					{"img":"../../static/img/首页/VCG21400188179.jpg"},
					{"img":"../../static/img/首页/VCG21400234710.jpg"}
				],
				bb:[
					{"img":"../../static/img/首页/c52a84401b28a15d.jpg",
					"title1":"便捷公文包","title2":"￥35.00","title3":"￥45.00","title4":"剩余时间：已结束"},
					{"img":"../../static/img/首页/5a2e2383N59101c4c.jpg",
					"title1":"工艺杂志架","title2":"￥130.00","title3":"￥45.00","title4":"剩余时间：已结束"}
				],
				cc:[
					{"img":"../../static/img/首页/c5584649623f9d23.jpg","title1":"订书机","title2":"￥12.00","title3":"￥15.00"},
					{"img":"../../static/img/首页/e408dbeeee152bf7.jpg","title1":"可爱小怪兽","title2":"￥7.00","title3":"￥10.00"},
					{"img":"../../static/img/首页/d3e38cb1235b432c.jpg","title1":"小小招财猫","title2":"￥35.00","title3":"￥45.00"},
					{"img":"../../static/img/首页/f46011974e987d9d.jpg","title1":"小公仔","title2":"￥24.00","title3":"￥30.00"}
				],
				dd:[
					{"img":"../../static/img/首页/24437fa8642c794f.jpg","title1":"轻奢透明地球仪","title2":"￥219.00","title3":"￥259.00"},
					{"img":"../../static/img/首页/316335424b97e78f.jpg","title1":"泡泡男孩","title2":"￥98.00","title3":"￥139.00"},
					{"img":"../../static/img/首页/61dcbaa57e033e55.jpg","title1":"鎏玉堂","title2":"￥168.00","title3":"￥208.00"},
					{"img":"../../static/img/首页/b54971425795b993.jpg","title1":"村田稻夫流沙画","title2":"￥68.00","title3":"￥88.00"}
				],
				mark: 0,
				timer: ''
			}
		},
		created() {
			this.play()
		},
		methods: {
			p(yang,index){
				this.index0=index
				localStorage.setItem('arr0',JSON.stringify(this.cc)),
				localStorage.setItem('arr00',JSON.stringify(this.index0)),
				this.$router.push({
					path:"/four"
				})
			},
			y(yang,index){
				this.index1=index
				localStorage.setItem('arr1',JSON.stringify(this.cc)),
				localStorage.setItem('arr11',JSON.stringify(this.index1)),
				this.$router.push({
					path:"/seven"
				})
			},
			yy(yang,index){
				this.index2=index
				localStorage.setItem('arr2',JSON.stringify(this.dd)),
				localStorage.setItem('arr22',JSON.stringify(this.index2)),
				this.$router.push({
					path:"/eight"
				})
			},
			 handleClick(tab, event) {
		        console.log(tab, event);
		     },
			ff(){
				this.$router.push({
					path:"/five"
				})
			},
			input(){
				localStorage.setItem('data100',JSON.stringify(this.cc)),
				localStorage.setItem('data200',JSON.stringify(this.dd)),
				this.$router.push({
					path:"/six"
				})
			},
			autoplay() {
				if(this.mark < this.pic.length - 1) {
					this.mark++;
				} else {
					this.mark = 0;
				}

			},
			play() {
				this.timer = setInterval(this.autoplay, 5000)
			},
			change(num) {
				this.mark = num;
			},
			stop() {
				clearInterval(this.timer);
				this.timer = null;
			},
			go() {
				this.timer = setInterval(this.autoplay, 5000)
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	#one {
		width: 100%;
		height: 100%;
		background-color: #EDEDED;
		position: absolute;
		top: 0;
		left: 0;
		margin-bottom: 4rem;
	}
	
	.header11 {
		width: 100%;
		height: 13rem;
		/*background-color: white;*/
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.pic {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 13rem;
	}
	
	.pic img {
		width: 100%;
		height: 100%;
		border-bottom-left-radius: 3rem;
		border-bottom-right-radius: 3rem;
	}
	
	.tu li {
		width: 100%;
		height: 13rem;
		position: absolute;
		top: 0;
		left: 0;
		list-style: none;
	}
	
	.img-enter-active,
	.img-leave-active {
		transition: all 4s;
	}
	
	.img-enter,
	.img-leave-to {
		opacity: 0;
	}
	
	.img-enter-to,
	.img-leave {
		opacity: 1;
	}
	
	.aBtn {
		transition: all 2s ease;
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
		background-color: darkgrey;
		opacity: 0.5;
	}
	.tou .img1{
		width: 2.5rem;
		height: 2.5rem;
		margin-top: 0.5rem;
	}
	.tou .img2{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: 0.7rem;
	}
	.tou input{
		width: 85%;
		height: 2rem;
		border-radius: 100rem;
		padding-left: 2rem;
		border: 1px solid white;
	}
	.block{
		width: 85%;
		position: absolute;
		left: 7.5%;
		top: 5rem;
		border-radius: 2rem;
		/*border: 1px solid black;*/
		overflow: hidden;
	}
	.block img{
		width: 100%;
		height: 12rem;
		
	}
	.el-tabs{
		position: absolute;
		left: 1%;
		top: 2.4rem;
	}
	.zhong{
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 17rem;
		left: 0;
		line-height: 3rem;
		text-align: center;
		font-size: 1.5rem;
	}
	.section11{
		width: 100%;
		height: 40rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 20rem;
		left: 0;
		background-color: white;
	}
	.section11 .lun{
		width: 100%;
		height: 8rem;
		/*border: 1px solid black;*/
	}
	.section11 .lun img{
		width: 6rem;
		margin-top: 1rem;
	}
	.section11 .lun ul{
		display: flex;
		justify-content: space-around;
	}
	.section11 .lun ul li p{
		margin-top: 1rem;
	}
	.section11 .lun ul li p span{
		text-decoration: line-through;
	}
	.section11 .center{
		width: 100%;
		height: 35rem;
		/*border: 1px solid black;*/
		background-color: #EDEDED;
	}
	.section11 .center ul li{
		width: 11rem;
		height: 17rem;
		/*border: 1px solid darkgray;*/
		float: left;
		background-color: white;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.section11 .center ul li img{
		width: 11rem;
	}
	.section11 .center ul li p{
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
	.section11 .center button{
		width: 10rem;
		height: 2rem;
		margin-left: 0.5rem;
		border: 1px solid orange;
		background-color: white;
	}
	.zhong1{
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 64rem;
		left: 0;
		line-height: 3rem;
		text-align: center;
		font-size: 1.5rem;
	}
	.footer11{
		width: 100%;
		height: 35rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 68rem;
		left: 0;
		background-color: white;
	}
	.footer11 .center{
		width: 100%;
		height: 35rem;
		/*border: 1px solid black;*/
		background-color: #EDEDED;
	}
	.footer11 .center ul li{
		width: 11rem;
		height: 15rem;
		/*border: 1px solid darkgray;*/
		float: left;
		background-color: white;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.footer11 .center ul li img{
		width: 11rem;
	}
	.footer11 .center ul li p{
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
</style>