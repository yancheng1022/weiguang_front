<template>
  <el-container class="home_cotainer">
      <el-header>
          <div>
              <img src="../assets/logo.png" alt="" width="130px">
          </div>
          <el-button type="primary" @click="login">登录</el-button>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.home_cotainer{
    height: 100%;
}
.el-header{
    background-color: rgb(36, 41, 46);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-main{
    background-color: rgb(246, 248, 250);
}
.el-footer{
    background-color: rgb(211, 220, 230);
}

</style>