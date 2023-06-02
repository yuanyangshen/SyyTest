<template>
  <div class="nav-swiper">
    <div class="nav-swiper-main">
      <div class="swiper-t">
        <ul>
          <li class="active">
            <span>HTML/CSS</span>
            <i>
              <CaretRightOutlined/>
            </i>
          </li>
          <li>
            <span>HTML/CSS</span>
            <i>
              <CaretRightOutlined/>
            </i>
          </li>
          <li>
            <span>HTML/CSS</span>
            <i>
              <CaretRightOutlined/>
            </i>
          </li>
          <li>
            <span>HTML/CSS</span>
            <i>
              <CaretRightOutlined/>
            </i>
          </li>
          <li>
            <span>HTML/CSS</span>
            <i>
              <CaretRightOutlined/>
            </i>
          </li>
          <div class="active-r">

          </div>
        </ul>
        <div>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined/>
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined/>
              </div>
            </template>
            <div class="swiper-bg" v-for="item in sliderLsit" :key="item.id">
              <img :src="item.imageUrl">
            </div>
          </a-carousel>
        </div>
      </div>
      <ul class="swiper-b">
        <li>
          <h3>
            <img src="@/assets/images/title/chuji.png">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/images/title/chuji.png">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/images/title/chuji.png">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/images/title/chuji.png">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/images/title/chuji.png">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CaretRightOutlined, LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons-vue';
//api
import {getSliders} from '@/utils/api/slider'
import {onBeforeMount, ref} from "vue";
let sliderLsit = ref([]);
//生命周期
onBeforeMount(() => {
  getSliders().then(res => {
    console.log(res.data.list);
    sliderLsit.value = res.data.list;
  })
})
</script>

<style scoped lang="less">
.nav-swiper {

  background: linear-gradient(to top, white, #d9fafa);

}

.nav-swiper-main {
  max-width: 1140px;
  margin: 0 auto;
  padding: 47px 0;
}

.swiper-t {
  display: flex;
  height: 373px;
  border-radius: 8px 8px 0px 0px;
}

.swiper-t ul {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  background: #2B283D;
  border-radius: 8px 0px 0px 0px;
}

.swiper-t ul li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 335px;
  height: 37px;
  margin-top: 35px;
  font-size: 16px;
  color: #F2F2F2;
  cursor: pointer;
}

.active {
  background: linear-gradient(90deg, rgb(63, 222, 225), transparent);
}
.active-r{
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  width: 860px;
  height: 400px;
}

.swiper-bg {
  width: 860px;
  height: 373px;
}

.swiper-bg img {
  width: 100%;
  height: 100%;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 373px;
  line-height: 373px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
  cursor: pointer;
}

.ant-carousel :deep(.slick-slider .slick-list) {
  border-radius: 0 8px 0 0;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.swiper-t > div {
  width: 860px;
  height: 373px;
  cursor: pointer;
}

.swiper-b {
  display: flex;
  box-shadow: 0 55px 25px -25px #d3defb;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  background: #ffffff;
}

.swiper-b li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 120px;
  background: #ffffff;
  border-radius: 0px 0px 0px 11px;
}

.swiper-b li img {
  width: 50px;
  height: 50px;
}

.swiper-b li div {
  margin-left: 1px;
}

.swiper-b li div h4 {
  font-size: 18px;
  color: #333333;
  font-weight: bold;
}

.swiper-b li div span {
  font-size: 14px;
  line-height: 1.8;
}

</style>