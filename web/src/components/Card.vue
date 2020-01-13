<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-08 09:02:06
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-09 01:57:05
 * @Description: 文件描述
 -->
<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <slot></slot>
    <!-- <div class="card-body pt-3">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
      </div>
      <div class="pt-2">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>This is News header</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->

  </div>
</template>

<script>
  export default {
    props:{
      title: { type: String, required: true },
      icon: { type: String, required: true }
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/_variables';
.card {
  .card-header{
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}

</style>
