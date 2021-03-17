<template>
  <el-form ref="interviewRef" :model="form" label-width="80px">
    <el-form-item label="题目内容">
      <el-input type="textarea" :rows="2" placeholder="题目内容" v-model="form.question"></el-input>
    </el-form-item>
    <el-form-item label="题目分类">
      <el-select v-model="form.categoryId" placeholder="题目分类">
        <el-option
          v-for="item in options"
          :key="item.categoryId"
          :label="item.name"
          :value="item.categoryId"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="答案">
      <mavon-editor v-model="form.answer" ref="md" @imgAdd="imgAdd" @imgDel="imgDel" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {

      options: [],
      form: {
        question: "",
        answer: "",
        categoryId: ""
      },
      rules: {
        question: [
          { required: true, message: "请输入问题", trigger: "blur" },
        ],
        answer: [
          { required: true, message: "请输入答案", trigger: "change" }
        ],
        categoryId:[
            { required: true, message: "请选择分类", trigger: "change" }
        ]
      }
    };
  },
  created() {
    this.categoryDistinctList();
  },
  methods: {
    imgAdd(pos, $file) {
      let formdata = new FormData();
      console.log($file);

      formdata.append("file", $file);

      this.$http({
        url: "/uploadFile",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data;charset=UTF-8"
        }
      }).then(url => {
        console.log(url);
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        //    this.$vm.$img2Url(pos, url.data);
        this.$refs.md.$img2Url(pos, url.data.data);
      });
    },
    imgDel(pos) {
      delete this.imgFile[pos];
    },
    categoryDistinctList: function() {
      this.$http.get("category/getDistinctCategory").then(res => {
        console.log(res.data.Data);
        this.options = res.data.Data;
      });
    },
    onSubmit() {
      this.$refs.interviewRef.validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post(
            "interview/addInterview",
            this.form
          );
          if (res.Result !== 1) return this.$message.error("提交失败");
          this.$message.success("提交成功");
          this.$router.push("/admin/home");
        } else {
          return;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>>

