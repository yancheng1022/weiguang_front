<template>
  <el-container class="home_cotainer">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt width="130px" />
      </div>
      <el-button type="primary">登录</el-button>
    </el-header>
    <el-main>
      <div class="main_container">
        <div v-for="item in categoryListData" v-bind:key="item.topId" class="mainCategoryList_container">
            <div class="topName_container">{{item.topName}}</div>
            <div class="itemDetail_Container">
                <div v-for = "itemDetail in item.categoryList" v-bind:key="itemDetail.id" class="itemContent_container">
                    <div  class="itemContentName_container">{{itemDetail.name}}</div> 
                    <span class="itemIcon_container"><i class="el-icon-caret-right"></i></span>
                </div>
            </div>
            
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
      return{
          categoryListData:[]
      }
  },
  created() {
    this.categoryList();
  },
  methods: {
    categoryList: function() {
      this.$http.get("category/getAllCategory").then(res => {
        console.log(res.data.Data);
        this.categoryListData = res.data.Data;
      });
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
  /* background-color: rgb(246, 248, 250); */
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
}
.el-footer {
  background-color: rgb(211, 220, 230);
}
.mainCategoryList_container{
    display:flex;
    justify-content: flex-start;
}
.topName_container{
    border-radius:5px;
    font-size: 25px;
    font-weight:900;
    background-color: rgb(233, 233, 233);
    font-family: "楷体","楷体_GB2312";
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 300px;
    flex-shrink:0;
    margin-top: 50px;
    margin-right: 100px;

}
.itemDetail_Container{
    background-color: rgb(245, 245, 245);
    display:flex;
    flex-wrap:wrap;
    margin-top: 50px;
    padding-left: 20px;
}
.itemContent_container{
    display:flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
}
.itemContentName_container{
    display:flex;
    font-family: "楷体","楷体_GB2312";
    font-weight:550;
    background-color: rgb(233, 233, 233);
    border-radius:5px;
    height: 50px;
    padding-inline: 70px;
    justify-content: center;
    align-items: center;

}
.itemIcon_container{
    display:flex;
    padding-inline: 20px;
    justify-content: center;
    align-items: center;
}

</style>