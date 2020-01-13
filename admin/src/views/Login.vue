<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-05 06:28:19
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-07 04:15:45
 * @Description: 文件描述
 -->
<template>
  <div>
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {

      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })


      // // const res = await this.$http.post("login", this.model);
      // // // sessionStorage.token = res.data.token
      // // console.log(res)
      // // localStorage.token = res.data.token
      // // this.$router.push('/')
      // // this.$message({
      // //   type: 'success',
      // //   message: '登录成功'
      // // })

      // console.log(res.data)
    }
  }
};
</script>

<style lang="css" scoped>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>
