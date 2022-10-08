<template>
  <div class="swiper" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carouselList in list" :key="carouselList.id">
        <img :src="carouselList.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: {
    list: {
      type: Array
    }
  },
  watch: {
    list: {
      handler: function (newVal, oldVal) {
        this.$nextTick(() => {
          var mySwiper = new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },

            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar'
            },
            autoplay: true
          })
        })
      },
      immediate: true
    }
  }
}
</script>

<style scoped></style>