<template>
  <div class="container">
      <!-- 顶部全局组件-->
       <!-- <HospitalBottom/> -->
       <HospitalTop />
       <!-- 展示路由组件区域-->
       <div class="content">
       </div>
       <HospitalBottom />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  // justify-items: center;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height : 700px;
  // background: red;
  }
}

</style>