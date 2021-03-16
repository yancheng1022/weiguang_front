<template>
  <el-container class="home_cotainer">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <el-menu :default-active="this.$route.path" router>
              <el-submenu index="1">
                <template slot="title">
                  <span>题目</span>
                </template>
                <el-menu-item
                  v-for="(item,i) in navList"
                  :key="i"
                  :index="item.name"
                >{{ item.navItem }}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      navList:[
            {name:'/admin/home/addInterview',navItem:'题目录入'},
            {name:'/admin/home/interviewList',navItem:'题目列表'},
        ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.home_cotainer {
  height: 100%;
}
.el-header {
  background-color: rgb(36, 41, 46);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}
.tac {
  height: 100%;
}
.el-menu {
  border-right: none;
}
</style>