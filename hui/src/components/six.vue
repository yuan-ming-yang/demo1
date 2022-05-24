<template>
	<div id="six">
		<div class="safetyInfo">
			<div class="header">
				<img class="img1" @click="img" src="../../static/img/首页/返回.png"/>
				<input type="text" name="" id="" placeholder="搜索" v-model="search" />
				<img class="img2" @click="btn" src="../../static/img/首页/搜索.png"/>
			</div>
			
			<ul class="searchData" >
				<li v-for="(yang,index) in searchData" @click="yy(yang,index)">
					<img v-lazy="yang.img"/>
					<p>{{yang.title1}}</p>
					<p>{{yang.title2}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'six',
		data() {
			return {
				data6:[],
				index6:"",
				search: '',
				searchData: '',
				products: []
			}
		},
		methods: {
			yy(yang,index){
				this.index6=index
				localStorage.setItem('data6',JSON.parse(this.temp))
				localStorage.setItem('data66',JSON.parse(this.temp1))
				this.$router.push({
					path:"/eight"
				})
			},
			img(){
				this.$router.back()
			},
			btn: function() {
				var search = this.search;
				if(search) {
					this.searchData = this.products.filter(function(product) {
//						console.log(product)
						return Object.keys(product).some(function(key) {
//							console.log(key)
							return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}

			}
		},
		mounted(){
			let temp=JSON.parse(localStorage.getItem('data100'))
			let temp1=JSON.parse(localStorage.getItem('data200'))
			this.products=temp
			this.index=temp1
			console.log(temp)
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#six {
		width: 100%;
		height: 100%;
		background-color: #EDEDED;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 33;
	}
	.header{
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		line-height: 3rem;
		z-index: 44;
		background-color: white;
		
	}
	.header input{
		height: 2rem;
		margin-left: 3rem;
		border-radius: 10rem;
		padding-left: 1rem;
		font-size: 1.2rem;
		border: 1px solid burlywood;
	}
	.header .img1{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: 0.5rem;
		left: 0;
	}
	.header .img2{
		width: 2.5rem;
		height: 2.5rem;
		position: absolute;
		top: 0.3rem;
		right: 1rem;
	}
	.searchData{
		width: 100%;
		/*height: 16rem;*/
		/*border: 1px solid black;*/
		background-color: white;
	}
	 .searchData li{
		width: 11rem;
		height: 15rem;
		/*border: 1px solid black;*/
		float: left;
		background-color: white;
		margin-left: 0.5rem;
		margin-top: 0.3rem;
	}
	 .searchData li img{
		width: 11rem;
	}
	 .searchData li p{
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
</style>