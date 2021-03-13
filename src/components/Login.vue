<template>
  <div class="login_container">
      <div class="login_box">
        <el-form :model="loginForm" label-width="0px" class="login_form">
            <el-form-item >
                <el-input v-model="loginForm.userName" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="loginForm.passWord" prefix-icon="el-icon-lock" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>

            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm:{
                userName:'',
                passWord:''
            }
        }
    },
    methods: {
        async login(){
            const {data : res} = await this.$http.post('admin/login',this.loginForm);
            console.log(res.Data);
            if(res.Result !== 1)return this.$message.error("登录失败");
            this.$message.success("登录成功");
            window.sessionStorage.setItem("token",res.Data);
            this.$router.push("/home")
        }
    }
    
}
</script>

<style scoped>
.login_container{ 
    background-color:  rgb(4,15,36);
    height: 100%;
}
.login_box{
   width: 450px;
   height: 300px;
   background-color: #fff; 
   border-radius: 3px;
   position: absolute;
   left: 50%;
   top:50%;
   transform: translate(-50%,-50%);
}
.btns{
    display: flex;
    justify-content: center;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>>

