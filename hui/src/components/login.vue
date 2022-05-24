<template>
	<div id="login">
		<img class="one" @click="one" src="../../static/img/首页/返回.png"/>
		<el-row type="flex" justify="center">
			<el-form ref="formData" :model="formData" :rules="rules" label-width="80px" @keyup.enter.native="login()">
				<el-form-item prop="userName" label="用户名">
					<el-input v-model="formData.userName" placeholder="请输入用户名" prefix-icon="icon-login_user" clearable></el-input>
				</el-form-item>
				<el-form-item prop="password" label="密码">
					<el-input v-model="formData.password" placeholder="请输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input>
				</el-form-item>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn" @click="login('formData')" icon="el-icon-upload">登录</el-button>
					<el-button @click="resetForm('formData')">重置</el-button>
				</el-form-item>
				</el-form-item>
				<router-link to="register" style="margin-left: 6rem;">没有密码？注册</router-link>
			</el-form>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				formData: {
					userName: '',
					password: ''
				},
				rules: {
					userName: [{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			one(){
				this.$router.push({
					path:"/five"
				})
			},
			login(formName) {

				this.$refs[formName].validate(valid => {
					if(valid) {
						this.$message({
							type: 'success',
							message: '登录成功'
						});
						this.$router.push({
							path:'/five'
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
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
#login{
	width: 100%;
	height: 100%;
	background-image: url(../../static/img/src=http___img.zcool.cn_community_0387b3658aabb56a801219c77ce7931.gif&refer=http___img.zcool.gif);
	z-index: 99;
	position: absolute;
	top: 0;
	left: 0;
}
.one{
	width: 2rem;
	margin-top: 1rem;
}
.el-row{
	width: 80%;
	height: 14rem;
	/*border: 1px solid black;*/
	margin-top: 10rem;
	margin-left: 10%;
}

</style>