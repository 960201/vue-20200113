<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-05 14:07:59
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-07 02:03:57
 * @Description: 文件描述
 -->
<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
       <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type='text' v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props:{
    id:{}
  },
  data () {
    return {
      model: {},
    }
  },
  methods: {
    // 保存
    async save () {
      // eslint-disable-next-line no-unused-vars
      let res
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model)
      }else{

        res = await this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 获取数据
    async fetch(){
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    },

  },
  created() {
    this.id && this.fetch()
  },
}
</script>

<style lang="less" scoped>
</style>
