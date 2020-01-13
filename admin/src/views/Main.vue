<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-05 06:35:29
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-09 22:58:07
 * @Description: 文件描述
 -->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          unique-opened 
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分类</span>
            </template>
            <el-menu-item index="/categories/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建分类</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/categories/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>分类列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物品</span>
            </template>
            <el-menu-item index="/items/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建物品</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/items/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>物品列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>英雄</span>
            </template>
            <el-menu-item index="/heroes/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建英雄</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/heroes/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>英雄列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章</span>
            </template>
            <el-menu-item index="/articles/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建文章</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/articles/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>文章列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>广告位</span>
            </template>
            <el-menu-item index="/ads/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建广告位</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/ads/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>广告位列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员</span>
            </template>
            <el-menu-item index="/admin_users/create">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>新建管理员</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/admin_users/list">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>管理员列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less">
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

</style>
