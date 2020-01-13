<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-05 15:26:14
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-06 19:00:50
 * @Description: 文件描述
 -->
<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="username" label="名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope='scope'>
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin_users/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    // 获取所有分类
    async fetch() {
      const res = await this.$http.get("rest/admin_users");
      this.items = res.data;
    },
    // 删除某一个分类
    async remove(row) {
      this.$confirm(`是否确定要删除管理员 "${row.username}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/admin_users/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      })
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="less" scoped></style>
