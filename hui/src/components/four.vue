<template>
	<div id="four">
		<div class="header44" @click="aa">
			购物车
		</div>
		<div class="bm-view">
			<div class="product_table" v-for="(item,index) in arr" :key="index">
				<div style="width:20px;height:20px;border-radius:10px;border:1px solid black; margin-top: 1.8rem;" @click="checkSingle(item)" :class="{checked:item.makeChoose}"></div>
				<div class="product_info"><img style="width: 5rem; margin-left: 1rem;" v-lazy="item.img"/></div>
				<div class="product_info" style="margin-left: 1rem;">
					<p>{{item.title1}}</p>
					<p style="margin-top: 2rem;">{{item.title2}}</p>
				</div>
				<div class="product_info">
					 <el-input-number style="width: 8rem; margin-top: 1rem;" v-model="item.num" @click="deleteProduct(index)" :min="1" :max="10" label="描述文字"></el-input-number>
					 <p style="margin-left: 2rem;margin-top: 0.5rem;">共：{{item.title3*item.num}}</p>
				</div>
				<div class="product_info" @click="deleteProduct(index)"><img style="width: 2rem; margin-left: 1rem; margin-top: 1.5rem;" src="../../static/img/删除.png"/></div>
			</div>
			<div class="zui">
				<div @click="checkAll()" :class="{checked:checkAllItem}">全选</div>
				<div>总价格:{{totalPrice}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: "four",
		data() {
			return {
				arr: [
					{"img":"../../static/img/首页/c5584649623f9d23.jpg","title1":"订书机",
					"title2":"￥12.00","title3":"12.00","num":1},
					{"img":"../../static/img/首页/e408dbeeee152bf7.jpg",
					"title1":"可爱小怪兽","title2":"￥7.00","title3":"7.00","num":1},
					{"img":"../../static/img/首页/d3e38cb1235b432c.jpg",
					"title1":"小小招财猫","title2":"￥35.00","title3":"35.00","num":1},
					{"img":"../../static/img/首页/f46011974e987d9d.jpg",
					"title1":"小公仔","title2":"￥24.00","title3":"24.00","num":1}
				],
				totalPrice: 0, //总金额
				checkAllItem: false, //全部选中
				checkedList: [] //选中的数
			}
		},
		methods: {
			aa() {
				this.$router.push({
					path: "/kong"
				})
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
			//计算总金额
			calcTotalPrice: function() {
				var _this = this
				this.totalPrice = 0
				this.arr.forEach((element, index) => {
					if(element.makeChoose) {
						_this.totalPrice += element.title3 * element.num //这里是一个累加的过程,所以要用+=
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
			}
		},
		atch: {
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
		//		mounted() {
		//			let temp = JSON.parse(localStorage.getItem('arr0'))
		//			let temp1 = JSON.parse(localStorage.getItem('arr00'))
		//			this.arr = temp
		//			console.log(temp)
		//			console.log(temp1)
		//			this.index100 = temp1
		//		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#four {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.header44 {
		width: 100%;
		height: 3rem;
		/*border: 1px solid black;*/
		line-height: 3rem;
		text-align: center;
		font-size: 1.5rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 66;
		background-color: white;
	}
	.bm-view{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 4rem;
	}
	.product_table {
		display: flex;
		width: 100%;
		height: 6rem;
		/*border: 1px solid black;*/
	}
	.product_info {
		flex: 1;
	}
	.checked {
		background-color: pink;
	}
	.zui{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		background-color: pink;
		position: absolute;
		top: 30rem;
		display: flex;
		justify-content: space-around;
	}
</style>