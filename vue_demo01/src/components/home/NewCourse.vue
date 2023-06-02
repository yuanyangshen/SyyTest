<template>
  <div class="new-course">
    <div class="new-course-main">
      <div class="new-course-t">
        <div class="title-hot">
          <div class="hot">HOT</div>
          <div class="hot-c"></div>
        </div>
        <div class="title-text">
          <div class="title-t">新上好课</div>
        </div>
      </div>
      <div class="course-content">
        <ul class="content-ul">
          <li v-for="item in mostNewList" :key="item.id" class="content-li">
            <div class="li-img"><img :src="item.courseCover"></div>
            <div class="li-vipLog"><img src="https://xuexiluxian.cn/resources/images/vipLogo.png"></div>
            <div class="li-name">{{ item.courseName }}</div>
            <div class="li-desc"><span>{{ valueToText(item.courseLevel) }}</span>·{{
                item.purchaseCnt
              }}人报名
            </div>
            <div class="li-price"><span class="menberFree">会员免费</span><span class="menberPrice">￥{{
                item.salePrice
              }}</span></div>
          </li>
          <!--          <li v-for="num in 8" class="content-li">
                      <div class="li-img"><img src="https://oss.xuexiluxian.cn/xiaoluxian-vcr/0682e6819f4e4594a29f519829c297c0.png"></div>
                      <div class="li-vipLog"><img src="https://xuexiluxian.cn/resources/images/vipLogo.png"></div>
                      <div class="li-name">echarts数据可视化入门+实战案例</div>
                      <div class="li-desc"><span>中级</span>·93人报名</div>
                      <div class="li-price"><span class="menberFree">会员免费</span><span class="menberPrice">￥399.00</span></div>
                    </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {mostNew} from "../../utils/api/mostNew";
import {computed, onBeforeMount, ref} from "vue";

let mostNewList = ref([]);

onBeforeMount(() => {
  mostNew({
    pageNum: 1,
    pageSize: 8
  }).then(res => {
    mostNewList.value = res.data.pageInfo.list;
  })
})

const levelList = [
  {text: '初级', value: 1},
  {text: '中级', value: 2},
  {text: '高级', value: 3},
]

const valueToText = computed(() => function (value: number) {
  for (const level of levelList) {
    if (level.value === value) {
      return level.text;
    }
  }

});

</script>
<style scoped lang="less">
.new-course-main {
  width: 1140px;
  margin: 0 auto;
}

.new-course-t {
  display: flex;
}

.title-hot {
  display: flex;
}

.title-hot .hot {
  width: 65px;
  height: 34px;
  background: linear-gradient(90deg, #ff727f 0%, #fc685c 100%);
  border-radius: 8px 0 8px 8px;
  font-size: 20px;
  padding: 0 10px;
  line-height: 34px;
  text-align: center;
}

.title-hot .hot-c {
  width: 0;
  height: 0;
  border: 6px solid #fc685c;
  border-right-color: transparent;
  border-bottom-color: transparent;
}

.title-text {
  margin-left: 2px;

  .title-t {
    position: relative;
    font-size: 22px;
    padding: 0 5px;
    color: #333333;
    line-height: 31px;
    font-weight: 700;
  }

  .title-t:after {
    content: '';
    position: absolute;
    top: 22px;
    left: 0px;
    width: 100%;
    height: 13px;
    background: linear-gradient(90deg, #fbf84f 0%, #fea935 100%);
    border-radius: 7px;
    z-index: -1;
  }
}

.course-content {
  width: 100%;
  height: 100%;
  /* background: red; */
  margin-top: 20px;
  display: flex;

  .content-ul {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .content-li {
      position: relative;
      width: 270px;
      height: 275px;
      /* background: palevioletred; */
      margin-bottom: 20px;
      box-shadow: 1px 1px 10px rgb(27 39 94 / 40%);
      border-radius: 8px;
      transition: margin-top 0.2s;
      -webkit-transition: margin-top 0.2s;
      overflow: hidden;

      .li-img img {
        width: 100%;
        height: 165px;
      }

      .li-vipLog {
        position: absolute;
        top: 5px;
        right: 10px;
      }

      .li-name {
        font-size: 16px;
        font-weight: 700;
        margin: 14px 10px 0 10px;
      }

      .li-desc {
        font-size: 12px;
        margin: 15px 0 0 14px;
        text-align: left;
        color: #808080;
      }

      .li-price {
        position: relative;
        font-size: 14px;
        margin: 15px 0 0 10px;
        display: flex;

        .menberFree {
          padding: 2px 10px;
          height: 20px;
          color: #fff;
          font-size: 12px;
          background: linear-gradient(90deg, #ff928e, #fe7062 99%);
          border-radius: 24px 0 24px 0;
        }

        .menberPrice {
          color: #fe7062;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }

  }

}

</style>