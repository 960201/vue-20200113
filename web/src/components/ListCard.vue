<!--
 * @Author: 作者：LIN
 * @Date: 2020-01-09 00:11:26
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-11 11:10:59
 * @Description: 文件描述
 -->
<template>
  <m-card :icon="icon" :title="title">
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{ active: active === i }"
          v-for="(category, i) in categories"
          :key="i"
          @click="$refs.list.swiper.slideTo(i)"
        >
          <div class="nav-link">{{ category.name }}</div>
        </div>
      </div>
      <div class="pt-2">
        <swiper
          ref="list"
          @slide-change="() => (active = $refs.list.swiper.realIndex)"
          :options='{autoHeight: true}'
        >
          <swiper-slide v-for="(category, i) in categories" :key="i">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
