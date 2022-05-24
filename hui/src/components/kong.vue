<template>
	<div>
		<p @click="yang">1111</p>
		<div class="product_table">
			<div class="product_info">商品信息</div>
			<div class="product_info">商品金额</div>
			<div class="product_info">商品数量</div>
			<div class="product_info">总金额</div>
			<div class="product_info">编辑</div>
		</div>
		<div class="product_table" v-for="(item,index) in arr" :key="index">
			<div style="width:20px;height:20px;border-radius:10px;border:1px solid black;" @click="checkSingle(item)" :class="{checked:item.makeChoose}"></div>
			<div class="product_info">{{item.title1}}</div>
			<div class="product_info">{{item.title2}}</div>
			
			 <el-input-number v-model="item.num" @click="deleteProduct(index)" :min="1" :max="10" label="描述文字"></el-input-number>
			
			<div class="product_info">{{item.title2*item.num}}</div>
			<div class="product_info" @click="deleteProduct(index)">删除</div>
		</div>
		<div style="width:20px;height:20px;border-radius:10px;border:1px solid black;margin-top:10px" @click="checkAll()" :class="{checked:checkAllItem}"></div>
		<div>总价格:{{totalPrice}}</div>
	</div>
</template>

<script>
	 import Vue from 'vue'
	export default {
		name: 'kong',
		data() {
			return {
//				num:0,
				arr: [
					{
						title1: '西瓜',
						title2: 100,
						num: 0
					},
					{
						title1: '南瓜',
						title2: 50,
						num: 0
					},
					{
						title1: '苹果',
						title2: 300,
						num: 0
					},
				],
				totalPrice: 0, //总金额
				checkAllItem: false, //全部选中
				checkedList: [] //选中的数,
				
			}
		},
		methods: {
			//删除某一项
			yang(){
				this.$router.back()
			},
			deleteProduct: function(index) {
				this.arr.splice(index, 1)
				this.calcTotalPrice() //这里要注意,当某一项删除时,如果你选中了,这里也是要做计算总价格的
			},
			//修改数量
			changeNumber: function(number, add) {
				if(add < 0) {
					number.num--;
					if(number.num < '1') { //因为数量最低是1
						number.num = 1
					}
				} else {
					number.num++;
				}
				this.calcTotalPrice()
			},
			
			//计算总金额
			calcTotalPrice: function() {
				var _this = this
				this.totalPrice = 0
				this.arr.forEach((element, index) => {
					if(element.makeChoose) {
						_this.totalPrice += element.title2 * element.num //这里是一个累加的过程,所以要用+=
					}
				});
			},
			//让页面一进来就处于选中的状态
			makeAllChecked: function() {
				this.arr.forEach((item) => {
					if(typeof item.makeChoose == 'undefined') {
						Vue.set(item, 'makeChoose', false)
					}
				})
			},
			//选中单个的
			checkSingle: function(item) {
				if(typeof item.makeChoose == 'undefined') { //这里要注意,因为checked字段根本不在this.getProductList里面,所以你要自己赋值进去
					Vue.set(item, 'makeChoose', true) //这里应该设为true
				} else {
					item.makeChoose = !item.makeChoose
				}
				this.calcTotalPrice()
			},
			//选中所有的
			checkAll: function() {
				this.checkAllItem = !this.checkAllItem
				var _this = this
				if(this.checkAllItem) {
					this.arr.forEach(element => {
						if(typeof element.makeChoose == 'undefined') {
							Vue.set(element, 'makeChoose', _this.checkAllItem) //让每一小项跟随checkall来变化
						} else {
							element.makeChoose = _this.checkAllItem
						}
					});
				} else {
					this.arr.forEach(element => {
						if(typeof element.makeChoose == 'undefined') {
							Vue.set(element, 'makeChoose', _this.checkAllItem)
						} else {
							element.makeChoose = _this.checkAllItem
						}
					});
				}
				this.calcTotalPrice()
			},
		},
		watch: {
			//如果全部选中,那么全部选中的按钮应该变绿,如果一项不是,应该变空
			arr: {
				handler: function(item) {
					this.checkedList = this.arr.filter((element) => {
						return element.makeChoose == true;
					})
					//选中数<总数据
					if(this.checkedList.length < this.arr.length) {
						this.checkAllItem = false
					} else {
						this.checkAllItem = true
					}
				},
				deep: true //这个deep:true一定要写,不然肯定不会时时变化的
			}
		},
		created: function() {
			this.makeAllChecked()
		}
//		mounted(){
//			let temp=JSON.parse(localStorage.getItem('arr0'))
//			let temp1=JSON.parse(localStorage.getItem('arr00'))
//			this.arr=temp
//			console.log(temp)
//			console.log(temp1)
//			this.index=temp1
//		}
	}
</script>

<style>
	.product_table {
		display: flex;
		width: 100%;
	}
	
	.product_info {
		flex: 1;
	}
	
	.checked {
		background-color: pink;
	}
</style>