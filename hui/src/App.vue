<template>
  <div id="app">
		<router-view></router-view>
		<ul>
			<li><router-link to="/"><img src="../static/img/首页/首页 (5).png"/><p>首页</p></router-link></li>
			<li><router-link to="/two"><img src="../static/img/首页/分类 (4).png"/><p>分类</p></router-link></li>
			<li><router-link to="/four"><img src="../static/img/首页/购物车空 (2).png"/><p>购物车</p></router-link></li>
			<li><router-link to="/five"><img src="../static/img/首页/_我的 (2).png"/><p>我的</p></router-link></li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped="scoped">
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
#app {
	width: 100%;
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
ul{
	width: 100%;
	height: 4rem;
	background-color: white;
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	left: 0;
}
ul li{
	width: 3rem;
	height: 4rem;
	margin-top: 0.25rem;
	/*border: 1px solid black;*/
}
ul li img{
	width: 2rem;
	height: 2rem;
	margin-left: 0.1rem;
}
</style>
