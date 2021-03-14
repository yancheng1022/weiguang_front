<template>
  <div class="login_container">
    <div class="login_box">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        label-width="0px"
        class="login_form"
        :rules="rules"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            prefix-icon="el-icon-user"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            v-model="loginForm.passWord"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="密码"
          ></el-input>
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
  data() {
    return {
      loginForm: {
        userName: "",
        passWord: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 4, max: 10, message: "长度在 4 到 10 ", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    login() {
        this.$refs.loginFormRef.validate(async (valid) => {
            if(valid){
                const { data: res } = await this.$http.post("admin/login",this.loginForm);
                if (res.Result !== 1) return this.$message.error("登录失败");
                this.$message.success("登录成功");
                window.sessionStorage.setItem("token", res.Data);
                this.$router.push("/home");
            }else{
                return;    
            }
        })
    }
  }
}
</script>

<style scoped>
.login_container {
  background-color: rgb(4, 15, 36);
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.btns {
  display: flex;
  justify-content: center;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>>

