<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="题目编号" width="180"></el-table-column>
      <el-table-column prop="categoryName" label="分类" width="180"></el-table-column>
      <el-table-column prop="question" label="问题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change"
      ></el-pagination>
    </div>
    <!--弹框组件开始-----------------------start-->
    <dialog-component
      v-if="showDialog"
      ref="dialogComponent"
      :item-info="tableItem"
      @closeDialog="closeDialog"
    ></dialog-component>
    <!--弹框组件结束-----------------------end-->

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import DialogComponent from "./InterviewDialog";
export default {
  components: { DialogComponent },
  data() {
    return {
      delVisible: false,//删除提示弹框的状态
      index: 1,
      msg: '',
      editarr: 1,
      showDialog: false,
      tableData: [],
      total: 0,
      pageSize: 10,
      pageIndex: 1,
      tableItem: {
        id: "",
        categoryName: "",
        question: ""
      }
    };
  },
  created() {
    let request = { pageIndex: 1, pageSize: 10 };
    this.interviewList(request);
  },
  methods: {
    interviewList: function(request) {
      this.$http.post("interview/adminInterviewList", request).then(res => {
        this.tableData = res.data.Data;
        this.total = parseInt(res.data.TotalCount);
      });
    },
    current_change: function(pageIndex) {
      this.pageIndex = pageIndex;
    },
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
      this.tableItem = row;
      this.showDialog = true;
      this.$nextTick(() => {
        this.$refs["dialogComponent"].showDialog = true;
      });
    },
    // 关闭操作
    closeDialog(flag) {
      if (flag) {
        // 重新刷新表格内容
        let request = { pageIndex: 1, pageSize: 10 };
        this.interviewList(request);
      }
      this.showDialog = false;
    },
    //单行删除
    handleDelete(index, row) {
      this.idx = index;
      this.msg = row; //每一条数据的记录
      this.delVisible = true;
    },
    // 确定删除
    deleteRow() {
      this.$axios
        .get("interview/delInterviewList", {
          params: {
            delarr: this.delarr
          }
        })
        .then(res => {
          
        })
      this.delVisible = false; //关闭删除提示模态框
    }
  }
};
</script>

<style scoped>
</style>