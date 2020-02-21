<template>
  <div class="layout">
    <el-container>
      <el-header style="height:100px;position:relative;display: flex;"><top/></el-header>
      <el-main style="background:grey;height:100%;overflow-x:hidden">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import top from "./header";
export default {
  components: { top },
  mounted() {
    // console.log(this.$route)
  }
};
</script>


<style lang="scss" scoped>
.layout{
    padding: 0 200px;
     zoom: 0.75;
}
    
</style>