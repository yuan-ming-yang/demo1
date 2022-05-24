<template>
	<div id="register">
		<img class="one" @click="one" src="../../static/img/首页/返回.png"/>
		<el-row type="flex" justify="center">
			<el-form ref="formData" :model="formData" :rules="rules" label-width="80px" @keyup.enter.native="register()">
				<el-form-item prop="userName" label="用户名">
					<el-input v-model="formData.userName" placeholder="请输入用户名" prefix-icon="icon-login_user" clearable></el-input>
				</el-form-item>
				<el-form-item prop="password" label="密码">
					<el-input v-model="formData.password" placeholder="请输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input>
				</el-form-item>
				<el-form-item prop="cheackPassword" label="确认密码">
					<el-input v-model="formData.cheackPassword" placeholder="再次输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input>
				</el-form-item>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="register('formData')" icon="el-icon-upload">注册</el-button>
					<el-button @click="resetForm('formData')">重置</el-button>
				</el-form-item>
				<router-link to="login" style="margin-left: 6rem;">已有密码？登录</router-link>

			</el-form>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "register",
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.formData.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};

			return {
				formData: {
					userName: '',
					password: '',
					cheackPassword: ''
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
					}],
					cheackPassword: [{
						required: true,
						validator: validatePass,
						trigger: 'blur'
					}]

				}
			};
		},
		methods: {
			one(){
				this.$router.back()
			},
			register(formName) {
				this.$refs[formName].validate(valid => {
					if(valid) {
						this.$message({
							type: 'success',
							message: '注册成功'
						});
						this.$router.push({
							name: 'login'
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
#register{
	width: 100%;
	height: 100%;
	background-image: url(../../static/img/src=http___file2.rrxh5.cc_g2_c1_2019_12_09_1575896798551.gif&refer=http___file2.rrxh5.gif);
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