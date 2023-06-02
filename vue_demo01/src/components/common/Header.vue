<template>
  <header>
    <div class="header-main">
      <div class="header-l">
        <h1 class="logo">
          <img src="@/assets/images/bg/logo2.png">
        </h1>
        <ul>
          <li class="active">首页</li>
          <li>课程</li>
          <li>会员</li>
        </ul>
      </div>
      <div class="header-r">
        <div class="search">
          <a-input-search
              v-model:value="value"
              placeholder="Input A Red Heart"
              enter-button
              @search="onSearch"
          />
          <el-icon>
            <Search/>
          </el-icon>
        </div>
        <div class="shop">
          <ShoppingCartOutlined />
        </div>
        <div class="login">
          登录/注册
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import {defineComponent, ref} from 'vue';
import {Ref} from "@vue/reactivity";
import {ShoppingCartOutlined} from '@ant-design/icons-vue';

const value:Ref<String> = ref();

function onSearch(searchValue: string) {
  console.log('use value', searchValue);
  console.log('or use this.value', value);
}
</script>
<style scoped>
header {
  width: 100%;
  height: 100px;
}

.header-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  height: 100px;
  margin: 0 auto;

}

.header-l {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 127px;
  height: 50px;
  margin-right: 51px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.header-l ul {
  display: flex;
  height: 50px;
}

.header-l ul li {
  margin-right: 79px;
  color: #808080;
  line-height: 50px;
  font-weight: 500;
  cursor: pointer;
}

.active{
  position: relative;
}
.active:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 140%;
  margin-left: -10%;
  height: 3px;
  background: #3585FF;

}

.header-r {
  display: flex;
  align-items: center;
}

.header-r .search {
  padding: 5px 10px;
  width: 300px;
  height: 43px;
  border-radius: 5px;
}

.header-r .search input {
  height: 43px;
  border: none;
  background: transparent;
  width: 270px;
}
.header-r .shop{
  display: flex;
  align-items: center;
  margin: 0px 20px 0px 10px;
  cursor: pointer;
}
.header-r .login{
  font-size: 16px;
  color: #808080;
  font-weight: 400;
  cursor: pointer;
}
</style>